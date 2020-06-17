function ProductsLinkTarget({ state, dispatch }) {
  const { SelectControl, Disabled } = wp.components
  const options = [
    { label: wp.i18n.__('Current tab / window', 'wpshopify'), value: '_self' },
    { label: wp.i18n.__('New tab / window', 'wpshopify'), value: '_blank' },
  ]

  function onChange(newVal) {
    dispatch({ type: 'UPDATE_SETTING', payload: { key: 'linkTarget', value: newVal } })
  }

  return state.payloadSettings.linkTo === 'none' ? (
    <Disabled>
      <SelectControl
        label={wp.i18n.__('Product links should open in:', 'wpshopify')}
        value={state.payloadSettings.linkTarget}
        options={options}
        onChange={onChange}
      />
    </Disabled>
  ) : (
    <SelectControl
      label={wp.i18n.__('Product links should open in:', 'wpshopify')}
      value={state.payloadSettings.linkTarget}
      options={options}
      onChange={onChange}
    />
  )
}

export { ProductsLinkTarget }
