function ProductsLinkTo({ state, dispatch }) {
  const { SelectControl } = wp.components

  const options = [
    { label: wp.i18n.__('WordPress', 'wpshopify'), value: 'wordpress' },
    { label: wp.i18n.__('Shopify', 'wpshopify'), value: 'shopify' },
    { label: wp.i18n.__('None', 'wpshopify'), value: 'none' },
  ]

  function onChange(newVal) {
    dispatch({ type: 'UPDATE_SETTING', payload: { key: 'linkTo', value: newVal } })
  }

  return (
    <SelectControl
      label={wp.i18n.__('Products should link to:', 'wpshopify')}
      help={
        state.payloadSettings.linkTo === 'wordpress' &&
        wp.i18n.__(
          'You must sync your single pages before this link option will work.',
          'wpshopify'
        )
      }
      value={state.payloadSettings.linkTo}
      options={options}
      onChange={onChange}
    />
  )
}

export { ProductsLinkTo }
