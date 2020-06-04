import {
  encodePayloadSettings,
  decodePayloadSettings,
} from '/Users/andrew/www/devil/devilbox-new/data/www/wpshopify-api'

function getSavedBlockSettings(payloadSettingsId) {
  return [decodePayloadSettings(payloadSettingsId), payloadSettingsId]
}

function getDefaultBlockSettings(defaultPayloadSettings) {
  return [defaultPayloadSettings, encodePayloadSettings(defaultPayloadSettings)]
}

function getBlockSettings(payloadSettingsId, defaultPayloadSettings) {
  // If a block has been saved already ...
  if (payloadSettingsId) {
    return getSavedBlockSettings(payloadSettingsId)
  }

  return getDefaultBlockSettings(defaultPayloadSettings)
}

function customDefaultPayloadSettingsProductSingle(payloadSettings) {
  var copyPayloadSettings = payloadSettings

  copyPayloadSettings.limit = 1
  copyPayloadSettings.itemsPerRow = 1
  copyPayloadSettings.linkTo = 'none'
  copyPayloadSettings.excludes = ['description']

  return copyPayloadSettings
}

function customDefaultPayloadSettingsBuyButton(payloadSettings) {
  var copyPayloadSettings = payloadSettings

  copyPayloadSettings.limit = 1
  copyPayloadSettings.itemsPerRow = 1
  copyPayloadSettings.excludes = ['title', 'images', 'description', 'pricing']
  copyPayloadSettings.linkTo = 'none'

  return copyPayloadSettings
}

function customDefaultPayloadSettingsProducts(payloadSettings) {
  var copyPayloadSettings = payloadSettings
  copyPayloadSettings.linkTo = 'none'
  copyPayloadSettings.excludes = ['description']
  copyPayloadSettings.itemsPerRow = 3
  copyPayloadSettings.limit = false

  return copyPayloadSettings
}

function customizeDefaultSettings(blockProps) {
  if (blockProps.name === 'wpshopify/products') {
    return customDefaultPayloadSettingsProducts(blockProps.attributes.defaultPayloadSettings)
  } else if (blockProps.name === 'wpshopify/single-product') {
    console.log('wpshopify/single-product', blockProps.attributes.defaultPayloadSettings)

    return customDefaultPayloadSettingsProductSingle(blockProps.attributes.defaultPayloadSettings)
  } else if (blockProps.name === 'wpshopify/buy-button') {
    console.log('wpshopify/buy-button', blockProps.attributes.defaultPayloadSettings)
    return customDefaultPayloadSettingsBuyButton(blockProps.attributes.defaultPayloadSettings)
  } else {
    return blockProps.attributes.defaultPayloadSettings
  }
}

/*

Setup inital block state

*/
function BlockInitialState({ blockProps }) {
  console.log('::::: BlockInitialState :::::')
  blockProps.attributes.defaultPayloadSettings = customizeDefaultSettings(blockProps)

  const [blockData, payloadSettingsId] = getBlockSettings(
    blockProps.attributes.payloadSettingsId,
    blockProps.attributes.defaultPayloadSettings
  )

  blockProps.setAttributes({
    payloadSettingsId: payloadSettingsId,
  })

  if (blockData.limit && blockData.limit < blockData.pageSize) {
    var pageSize = blockData.limit
  } else {
    var pageSize = blockData.pageSize
  }

  return {
    isLoading: false,
    notices: [],
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
  }
}

export { BlockInitialState }
