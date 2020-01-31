function BlockInitialState(options) {
  return {
    isLoading: true,
    isReady: false,
    notices: [],
    payloadSettings: options.settings.products,
    componentElement: false,
    componentId: false,
    componentType: 'products',
    componentOptions: options.settings.products
  }
}

export { BlockInitialState }
