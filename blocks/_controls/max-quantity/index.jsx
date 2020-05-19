function MaxQuantity({ state, dispatch }) {
  const { TextControl } = wp.components
  function onChange(newVal) {
    dispatch({ type: 'UPDATE_SETTING', payload: { key: 'maxQuantity', value: newVal } })
  }

  return (
    <TextControl
      type='Number'
      label={wp.i18n.__('Max quantity', 'wpshopify')}
      value={state.payloadSettings.maxQuantity}
      onChange={onChange}
    />
  )
}

export { MaxQuantity }
