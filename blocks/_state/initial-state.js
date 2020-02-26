import {
  enumMake,
  encodePayloadSettings,
  decodePayloadSettings
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

function BlockInitialState(options, blockProps) {
  const [blockData, payloadSettingsId] = getBlockSettings(
    blockProps.attributes.payloadSettingsId,
    blockProps.attributes.defaultPayloadSettings
  )

  blockProps.setAttributes({
    payloadSettingsId: payloadSettingsId
  })

  return {
    isLoading: true,
    isReady: false,
    notices: [],
    componentElement: false,
    shouldForceUpdate: false,
    componentType: 'products',
    blockProps: blockProps,
    payloadSettings: blockData,
    payloadSettingsId: payloadSettingsId,
    defaultPayloadSettings: blockProps.attributes.defaultPayloadSettings,
    defaultPayloadSettingsId: payloadSettingsId,
    queryParams: {
      query: options.settings.products.query,
      sortKey: enumMake(options.settings.products.sortBy),
      reverse: options.settings.products.reverse,
      first: options.settings.products.pageSize
    }
  }
}

export { BlockInitialState }
