const { ToggleControl } = wp.components
const { __ } = wp.i18n

function HideQuantity({ state, dispatch }) {
  function onChange(newVal) {
    dispatch({ type: 'UPDATE_SETTING', payload: { key: 'hideQuantity', value: newVal } })
  }

  return (
    <ToggleControl
      label={__('Hide quantity', wpshopify.misc.textdomain)}
      checked={state.payloadSettings.hideQuantity}
      onChange={onChange}
    />
  )
}

export { HideQuantity }
