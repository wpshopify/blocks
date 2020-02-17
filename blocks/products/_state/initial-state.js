import { enumMake } from '/Users/andrew/www/devil/devilbox-new/data/www/wpshopify-api'

function BlockInitialState(options, blockProps) {
  if (blockProps.attributes.payloadSettingsId) {
    var existingBlockData = JSON.parse(atob(blockProps.attributes.payloadSettingsId))
    var defaultPayloadSettingsId = blockProps.attributes.payloadSettingsId
  } else {
    var existingBlockData = blockProps.attributes.defaultPayloadSettings
    var defaultPayloadSettingsId = btoa(
      JSON.stringify(blockProps.attributes.defaultPayloadSettings)
    )
  }

  return {
    isLoading: true,
    isReady: false,
    notices: [],
    componentElement: false,
    componentType: 'products',
    blockProps: blockProps,
    payloadSettings: existingBlockData,
    payloadSettingsId: defaultPayloadSettingsId,
    defaultPayloadSettings: blockProps.attributes.defaultPayloadSettings,
    defaultPayloadSettingsId: defaultPayloadSettingsId,
    queryParams: {
      query: options.settings.products.query,
      sortKey: enumMake(options.settings.products.sortBy),
      reverse: options.settings.products.reverse,
      first: options.settings.products.pageSize
    }
  }
}

export { BlockInitialState }
