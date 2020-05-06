import {
  enumMake,
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

  return copyPayloadSettings
}

function customizeDefaultSettings(blockProps) {
  if (blockProps.name === 'wpshopify/products') {
    return customDefaultPayloadSettingsProducts(blockProps.attributes.defaultPayloadSettings)
  } else if (blockProps.name === 'wpshopify/single-product') {
    return customDefaultPayloadSettingsProductSingle(blockProps.attributes.defaultPayloadSettings)
  } else if (blockProps.name === 'wpshopify/buy-button') {
    return customDefaultPayloadSettingsBuyButton(blockProps.attributes.defaultPayloadSettings)
  } else {
    return blockProps.attributes.defaultPayloadSettings
  }
}

function BlockInitialState({ blockProps }) {
  blockProps.attributes.defaultPayloadSettings = customizeDefaultSettings(blockProps)

  const [blockData, payloadSettingsId] = getBlockSettings(
    blockProps.attributes.payloadSettingsId,
    blockProps.attributes.defaultPayloadSettings
  )

  blockProps.setAttributes({
    payloadSettingsId: payloadSettingsId,
  })

  if (
    blockProps.attributes.defaultPayloadSettings.limit &&
    blockProps.attributes.defaultPayloadSettings.limit <
      blockProps.attributes.defaultPayloadSettings.pageSize
  ) {
    var pageSize = blockProps.attributes.defaultPayloadSettings.limit
  } else {
    var pageSize = blockProps.attributes.defaultPayloadSettings.pageSize
  }

  return {
    isLoading: true,
    isReady: false,
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
      query: blockProps.attributes.defaultPayloadSettings.query,
      sortKey: enumMake(blockProps.attributes.defaultPayloadSettings.sortBy),
      reverse: blockProps.attributes.defaultPayloadSettings.reverse,
      first: pageSize,
    },
  }
}

export { BlockInitialState }
