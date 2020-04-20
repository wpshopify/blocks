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

function BlockInitialState({ blockProps }) {
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
