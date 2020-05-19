function ShowPriceRange({ state, dispatch }) {
  const { ToggleControl } = wp.components
  function onChange(newVal) {
    dispatch({ type: 'UPDATE_SETTING', payload: { key: 'showPriceRange', value: newVal } })
  }

  return (
    <ToggleControl
      label={wp.i18n.__('Show price range', 'wpshopify')}
      checked={state.payloadSettings.showPriceRange}
      onChange={onChange}
    />
  )
}

export { ShowPriceRange }
