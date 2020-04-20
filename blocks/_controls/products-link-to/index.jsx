const { __ } = wp.i18n
const { SelectControl } = wp.components
const { useState } = wp.element

function ProductsLinkTo({ state, dispatch }) {
  const [localVal, setLocalVal] = useState('none')

  const options = [
    { label: __('WordPress', wpshopify.misc.textdomain), value: 'wordpress' },
    { label: __('Shopify', wpshopify.misc.textdomain), value: 'shopify' },
    { label: __('None', wpshopify.misc.textdomain), value: 'none' }
  ]

  function onChange(newVal) {
    setLocalVal(newVal)
    dispatch({ type: 'UPDATE_SETTING', payload: { key: 'linkTo', value: newVal } })
  }

  return (
    <SelectControl
      label={__('Products should link to:', wpshopify.misc.textdomain)}
      value={localVal}
      help={__(
        'You must turn off Lite Sync in order to link products to WordPress single pages.',
        wpshopify.misc.textdomain
      )}
      options={options}
      onChange={onChange}
    />
  )
}

export { ProductsLinkTo }
