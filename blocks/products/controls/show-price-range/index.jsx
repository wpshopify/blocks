const { ToggleControl } = wp.components
const { __ } = wp.i18n

function ShowPriceRange({ state, dispatch }) {
  function onChange(newVal) {
    dispatch({ type: 'UPDATE_SETTING', payload: { key: 'showPriceRange', value: newVal } })
  }

  return (
    <ToggleControl
      label={__('Show price range', 'wpshopify')}
      checked={state.payloadSettings.showPriceRange}
      onChange={onChange}
    />
  )
}

export { ShowPriceRange }
