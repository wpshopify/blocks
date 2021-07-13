import {
  encodePayloadSettings,
  decodePayloadSettings,
} from '/Users/arobbins/www/_devilbox/devilbox/data/www/wpshopify-api';

function getSavedBlockSettings(payloadSettingsId) {
  return [decodePayloadSettings(payloadSettingsId), payloadSettingsId];
}

function getDefaultBlockSettings(defaultPayloadSettings) {
  return [defaultPayloadSettings, encodePayloadSettings(defaultPayloadSettings)];
}

function getBlockSettings(payloadSettingsId, defaultPayloadSettings) {
  // If a block has been saved already ...
  if (payloadSettingsId) {
    return getSavedBlockSettings(payloadSettingsId);
  }

  return getDefaultBlockSettings(defaultPayloadSettings);
}

function customDefaultPayloadSettingsProductSingle(payloadSettings) {
  var copyPayloadSettings = payloadSettings;

  copyPayloadSettings.limit = 1;
  copyPayloadSettings.itemsPerRow = 1;
  copyPayloadSettings.productsLinkTo = 'none';
  copyPayloadSettings.excludes = ['description'];

  return copyPayloadSettings;
}

function customDefaultPayloadSettingsBuyButton(payloadSettings) {
  var copyPayloadSettings = payloadSettings;

  copyPayloadSettings.limit = 1;
  copyPayloadSettings.itemsPerRow = 1;
  copyPayloadSettings.excludes = ['title', 'images', 'description', 'pricing'];
  copyPayloadSettings.productsLinkTo = 'none';

  return copyPayloadSettings;
}

function customDefaultPayloadSettingsProducts(payloadSettings) {
  var copyPayloadSettings = payloadSettings;
  copyPayloadSettings.productsLinkTo = 'none';
  copyPayloadSettings.excludes = ['description'];
  copyPayloadSettings.itemsPerRow = 3;
  copyPayloadSettings.limit = false;

  return copyPayloadSettings;
}

function customizeDefaultSettings(blockProps) {
  if (blockProps.name === 'wpshopify/products') {
    return customDefaultPayloadSettingsProducts(blockProps.attributes.defaultPayloadSettings);
  } else if (blockProps.name === 'wpshopify/single-product') {
    return customDefaultPayloadSettingsProductSingle(blockProps.attributes.defaultPayloadSettings);
  } else if (blockProps.name === 'wpshopify/buy-button') {
    return customDefaultPayloadSettingsBuyButton(blockProps.attributes.defaultPayloadSettings);
  } else {
    return blockProps.attributes.defaultPayloadSettings;
  }
}

/*

Setup inital block state

*/
function BlockInitialState({ blockProps }) {
  blockProps.attributes.defaultPayloadSettings = customizeDefaultSettings(blockProps);

  const [blockData, payloadSettingsId] = getBlockSettings(
    blockProps.attributes.payloadSettingsId,
    blockProps.attributes.defaultPayloadSettings
  );

  if (blockData.limit && blockData.limit < blockData.pageSize) {
    var pageSize = blockData.limit;
  } else {
    var pageSize = blockData.pageSize;
  }

  return {
    notices: [],
    isLoading: false,
    componentElement: false,
    shouldForceUpdate: false,
    componentType: 'products',
    dataType: 'products',
    blockProps: blockProps,
    payloadSettings: blockData,
    payloadSettingsId: payloadSettingsId,
    isFirstRender: blockProps.attributes.isFirstRender,
    defaultPayloadSettings: blockProps.attributes.defaultPayloadSettings,
    defaultPayloadSettingsId: payloadSettingsId,
    payload: [],
    queryParams: {
      query: blockData.query,
      sortKey: blockData.sortBy,
      reverse: blockData.reverse,
      first: pageSize,
    },
  };
}

export default BlockInitialState;
