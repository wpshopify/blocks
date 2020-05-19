function ShowZoom({ state, dispatch }) {
  const { ToggleControl } = wp.components
  function onChange(newVal) {
    dispatch({ type: 'UPDATE_SETTING', payload: { key: 'showZoom', value: newVal } })
  }

  return (
    <ToggleControl
      label={wp.i18n.__('Show zoom', 'wpshopify')}
      checked={state.payloadSettings.showZoom}
      onChange={onChange}
    />
  )
}

export { ShowZoom }
