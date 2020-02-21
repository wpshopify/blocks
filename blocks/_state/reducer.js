import update from 'immutability-helper'
import concat from 'lodash/concat'
import some from 'lodash/some'
import isEmpty from 'lodash/isEmpty'

function BlockReducer(state, action) {
  switch (action.type) {
    case 'UPDATE_SETTING': {
      if (typeof action.payload.value === 'undefined') {
        var valueToSet = state.defaultPayloadSettings[action.payload.key]
      } else {
        var valueToSet = action.payload.value
      }

      state.payloadSettings[action.payload.key] = update(
        state.payloadSettings[action.payload.key],
        {
          $set: valueToSet
        }
      )

      var payloadSettingsId = btoa(JSON.stringify(state.payloadSettings))

      state.blockProps.setAttributes({
        payloadSettingsId: payloadSettingsId
      })

      return {
        ...state,
        payloadSettingsId: payloadSettingsId
      }
    }

    case 'UPDATE_NOTICES': {
      let updatedNotices = state.notices

      if (!isEmpty(action.payload)) {
        if (!some(state.notices, action.payload)) {
          updatedNotices = concat(state.notices, [action.payload])
        } else {
          updatedNotices = state.notices
        }
      }

      return {
        ...state,
        notices: update(state.notices, { $set: updatedNotices })
      }
    }

    case 'SET_NOTICES': {
      return {
        ...state,
        notices: update(state.notices, { $set: action.payload })
      }
    }

    case 'SET_IS_LOADING': {
      return {
        ...state,
        isLoading: update(state.isLoading, { $set: action.payload })
      }
    }

    case 'SET_IS_READY': {
      return {
        ...state,
        isReady: update(state.isReady, { $set: action.payload })
      }
    }

    case 'SET_IS_LOADING': {
      return {
        ...state,
        isLoading: update(state.isLoading, {
          $set: action.payload
        })
      }
    }

    case 'UPDATE_QUERY_PARAMS': {
      return {
        ...state,
        queryParams: update(state.queryParams, { $merge: action.payload })
      }
    }

    default: {
      throw new Error(`Unhandled action type: ${action.type} in BlockReducer`)
    }
  }
}

export { BlockReducer }
