function AvailableForSale({ state, dispatch }) {
  const { RadioControl } = wp.components

  function onChange(newVal) {
    dispatch({ type: 'UPDATE_SETTING', payload: { key: 'availableForSale', value: newVal } })
  }

  return (
    <RadioControl
      label={wp.i18n.__('Available for sale', 'wpshopify')}
      help={wp.i18n.__('Determines whether to show products that are in stock or not', 'wpshopify')}
      selected={state.payloadSettings.availableForSale}
      options={[
        { label: wp.i18n.__('Any', 'wpshopify'), value: 'any' },
        { label: wp.i18n.__('In stock', 'wpshopify'), value: 'true' },
        { label: wp.i18n.__('Out of stock', 'wpshopify'), value: 'false' },
      ]}
      onChange={onChange}
    />
  )
}

export { AvailableForSale }
