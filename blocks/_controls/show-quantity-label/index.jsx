const { ToggleControl } = wp.components

function ShowQuantityLabel({ state, dispatch }) {
  function onChange(newVal) {
    dispatch({ type: 'UPDATE_SETTING', payload: { key: 'showQuantityLabel', value: newVal } })
  }

  return (
    <ToggleControl
      label={wp.i18n.__('Show quantity label', 'wpshopify')}
      checked={state.payloadSettings.showQuantityLabel}
      onChange={onChange}
    />
  )
}

export { ShowQuantityLabel }
