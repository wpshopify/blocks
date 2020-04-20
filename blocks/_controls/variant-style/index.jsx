const { __ } = wp.i18n
const { SelectControl } = wp.components

function VariantStyle({ state, dispatch }) {
  const options = [
    { label: __('Dropdown', wpshopify.misc.textdomain), value: 'dropdown' },
    { label: __('Buttons', wpshopify.misc.textdomain), value: 'buttons' }
  ]

  function onChange(newVal) {
    dispatch({ type: 'UPDATE_SETTING', payload: { key: 'variantStyle', value: newVal } })
  }

  return (
    <SelectControl
      label={__('Variant style', wpshopify.misc.textdomain)}
      value={state.payloadSettings.variantStyle}
      options={options}
      onChange={onChange}
    />
  )
}

export { VariantStyle }
