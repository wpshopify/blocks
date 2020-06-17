function DirectCheckout({ state, dispatch }) {
  const { ToggleControl } = wp.components

  function onChange(isChecked) {
    dispatch({
      type: 'UPDATE_SETTING',
      payload: { key: 'directCheckout', value: isChecked },
    })
  }

  return (
    <ToggleControl
      label={wp.i18n.__('Enable direct checkout', 'wpshopify')}
      checked={state.payloadSettings.directCheckout}
      onChange={onChange}
    />
  )
}

export default DirectCheckout
