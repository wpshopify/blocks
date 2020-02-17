const { TextControl } = wp.components
const { __ } = wp.i18n

function MaxQuantity({ state, dispatch }) {
  function onChange(newVal) {
    dispatch({ type: 'UPDATE_SETTING', payload: { key: 'maxQuantity', value: newVal } })
  }

  return (
    <TextControl
      type='Number'
      label={__('Max quantity', 'wpshopify')}
      value={state.payloadSettings.maxQuantity}
      onChange={onChange}
    />
  )
}

export { MaxQuantity }
