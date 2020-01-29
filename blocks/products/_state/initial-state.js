function BlockInitialState(options) {
  return {
    isLoading: true,
    isReady: false,
    isShopReady: false,
    notices: [],
    payload: false,
    defaultShortcode: '[wps_products]',
    defaultComponentConnectionParams: { first: 9, query: '*' },
    defaultCreds: options.settings.connection.storefront,
    defaultComponentType: 'products',
    defaultSettings: options.settings.products,
    payloadSettings: options.settings.products,
    componentSettings: [
      {
        componentConnectionParams: { first: 9, query: '*' },
        componentElement: false,
        componentId: false,
        componentOptions: options.settings.products,
        componentPayload: [],
        componentPayloadLastCursor: false,
        componentQueryParams: { first: 9, query: '*' },
        componentType: 'products'
      }
    ]
  }
}

export { BlockInitialState }
