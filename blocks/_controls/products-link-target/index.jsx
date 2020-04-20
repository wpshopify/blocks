const { __ } = wp.i18n
const { SelectControl } = wp.components

function ProductsLinkTarget({ state, dispatch }) {
  const options = [
    { label: __('Current tab / window', wpshopify.misc.textdomain), value: '_self' },
    { label: __('New tab / window', wpshopify.misc.textdomain), value: '_blank' }
  ]

  function onChange(newVal) {
    dispatch({ type: 'UPDATE_SETTING', payload: { key: 'linkTarget', value: newVal } })
  }

  return (
    <SelectControl
      label={__('Product links should open in:', wpshopify.misc.textdomain)}
      value={state.payloadSettings.linkTarget}
      options={options}
      onChange={onChange}
    />
  )
}

export { ProductsLinkTarget }
