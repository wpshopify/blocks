function VariantStyle({ state, dispatch }) {
  const { SelectControl } = wp.components
  const options = [
    { label: wp.i18n.__('Dropdown', 'wpshopify'), value: 'dropdown' },
    { label: wp.i18n.__('Buttons', 'wpshopify'), value: 'buttons' },
  ]

  function onChange(newVal) {
    dispatch({ type: 'UPDATE_SETTING', payload: { key: 'variantStyle', value: newVal } })
  }

  return (
    <SelectControl
      label={wp.i18n.__('Variant style', 'wpshopify')}
      value={state.payloadSettings.variantStyle}
      options={options}
      onChange={onChange}
    />
  )
}

export { VariantStyle }
