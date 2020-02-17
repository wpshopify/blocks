const { TextControl } = wp.components
const { __ } = wp.i18n

function QuantityLabelText({ state, dispatch }) {
  function onChange(newVal) {
    dispatch({ type: 'UPDATE_SETTING', payload: { key: 'quantityLabelText', value: newVal } })
  }

  return (
    state.payloadSettings.showQuantityLabel && (
      <TextControl
        label={__('Quantity label text', 'wpshopify')}
        value={state.payloadSettings.quantityLabelText}
        onChange={onChange}
      />
    )
  )
}

export { QuantityLabelText }
