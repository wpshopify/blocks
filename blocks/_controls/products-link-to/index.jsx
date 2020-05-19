function ProductsLinkTo({ state, dispatch }) {
  const { SelectControl } = wp.components
  const { useState } = wp.element
  const [localVal, setLocalVal] = useState('none')

  const options = [
    { label: wp.i18n.__('WordPress', 'wpshopify'), value: 'wordpress' },
    { label: wp.i18n.__('Shopify', 'wpshopify'), value: 'shopify' },
    { label: wp.i18n.__('None', 'wpshopify'), value: 'none' },
  ]

  function onChange(newVal) {
    setLocalVal(newVal)
    dispatch({ type: 'UPDATE_SETTING', payload: { key: 'linkTo', value: newVal } })
  }

  return (
    <SelectControl
      label={wp.i18n.__('Products should link to:', 'wpshopify')}
      help={wp.i18n.__(
        'You must turn off Lite Sync in order to link products to WordPress single pages.',
        'wpshopify'
      )}
      value={localVal}
      options={options}
      onChange={onChange}
    />
  )
}

export { ProductsLinkTo }
