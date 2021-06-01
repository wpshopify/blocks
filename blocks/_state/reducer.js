import {
  buildQueryFromSelections,
  encodePayloadSettings,
} from '/Users/andrew/www/devil/devilbox-new/data/www/wpshopify-api';

import { updateNoticesState } from '/Users/andrew/www/devil/devilbox-new/data/www/wpshopify-components';
import update from 'immutability-helper';

function setPayloadSettingsAttributes(setAttributes, payloadSettingsId) {
  setAttributes({
    payloadSettingsId: payloadSettingsId,
  });
}

function querySettings() {
  return [
    'title',
    'tag',
    'vendor',
    'productType',
    'query',
    'availableForSale',
    'connective',
    'collection',
    'pageSize',
    'sortBy',
    'reverse',
  ];
}

function changedQuerySetting(key) {
  return querySettings().includes(key);
}

function findQueryParamToUpdate({ key, value }, queryParams, newPayloadSettings) {
  var obj = { ...queryParams };

  switch (key) {
    case 'sortBy':
      obj['sortKey'] = value;

      break;
    case 'reverse':
      obj['reverse'] = value;

      break;
    case 'pageSize':
      obj['first'] = value;

      break;
    default:
      break;
  }

  obj['query'] = buildQueryFromSelections(newPayloadSettings);

  return obj;
}

function BlockReducer(state, action) {
  switch (action.type) {
    case 'UPDATE_SETTING': {
      if (typeof action.payload.value === 'undefined') {
        // get default instead
        var valueToSet = state.defaultPayloadSettings[action.payload.key];
      } else {
        var valueToSet = action.payload.value;
      }

      var newPayloadSettings = update(state.payloadSettings, {
        $merge: {
          [action.payload.key]: valueToSet,
        },
      });

      if (changedQuerySetting(action.payload.key)) {
        var queryParamObject = findQueryParamToUpdate(
          action.payload,
          state.queryParams,
          newPayloadSettings
        );

        newPayloadSettings.query = update(state.payloadSettings.query, {
          $set: buildQueryFromSelections(newPayloadSettings),
        });

        //   action.payload.key
      } else {
        var queryParamObject = state.queryParams;
      }

      var okqueryParamObject = update(state.queryParams, { $set: queryParamObject });
      var payloadSettingsId = encodePayloadSettings(newPayloadSettings);

      return {
        ...state,
        queryParams: okqueryParamObject,
        payloadSettings: newPayloadSettings,
        payloadSettingsId: payloadSettingsId,
      };
    }

    case 'UPDATE_NOTICES': {
      return {
        ...state,
        notices: updateNoticesState(state.notices, action.payload),
      };
    }

    case 'SET_NOTICES': {
      return {
        ...state,
        notices: update(state.notices, { $set: action.payload }),
      };
    }

    case 'SET_PAYLOAD': {
      return {
        ...state,
        payload: update(state.payload, { $set: action.payload }),
      };
    }

    case 'SET_IS_LOADING': {
      return {
        ...state,
        isLoading: update(state.isLoading, { $set: action.payload }),
      };
    }

    default: {
      throw new Error(`Unhandled action type: ${action.type} in BlockReducer`);
    }
  }
}

export default BlockReducer;
