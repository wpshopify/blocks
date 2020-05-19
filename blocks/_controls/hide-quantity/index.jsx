function HideQuantity({ state, dispatch }) {
  const { ToggleControl } = wp.components
  function onChange(newVal) {
    dispatch({ type: 'UPDATE_SETTING', payload: { key: 'hideQuantity', value: newVal } })
  }

  return (
    <ToggleControl
      label={wp.i18n.__('Hide quantity', 'wpshopify')}
      checked={state.payloadSettings.hideQuantity}
      onChange={onChange}
    />
  )
}

export { HideQuantity }
