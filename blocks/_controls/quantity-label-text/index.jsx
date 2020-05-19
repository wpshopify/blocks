function QuantityLabelText({ state, dispatch }) {
  const { TextControl } = wp.components

  function onChange(newVal) {
    dispatch({ type: 'UPDATE_SETTING', payload: { key: 'quantityLabelText', value: newVal } })
  }

  return (
    state.payloadSettings.showQuantityLabel && (
      <TextControl
        label={wp.i18n.__('Quantity label text', 'wpshopify')}
        value={state.payloadSettings.quantityLabelText}
        onChange={onChange}
      />
    )
  )
}

export { QuantityLabelText }
