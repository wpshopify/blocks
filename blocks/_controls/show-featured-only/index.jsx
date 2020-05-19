function ShowFeaturedOnly({ state, dispatch }) {
  const { ToggleControl } = wp.components
  function onChange(newVal) {
    dispatch({ type: 'UPDATE_SETTING', payload: { key: 'showFeaturedOnly', value: newVal } })
  }

  return (
    <ToggleControl
      label={wp.i18n.__('Show featured only', 'wpshopify')}
      checked={state.payloadSettings.showFeaturedOnly}
      onChange={onChange}
    />
  )
}

export { ShowFeaturedOnly }
