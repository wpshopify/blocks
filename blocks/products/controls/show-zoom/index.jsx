const { __ } = wp.i18n
const { ToggleControl } = wp.components

function ShowZoom({ state, dispatch }) {
  function onChange(newVal) {
    dispatch({ type: 'UPDATE_SETTING', payload: { key: 'showZoom', value: newVal } })
  }

  return (
    <ToggleControl
      label={__('Show zoom', 'wpshopify')}
      checked={state.payloadSettings.showZoom}
      onChange={onChange}
    />
  )
}

export { ShowZoom }
