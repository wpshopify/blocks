const { ToggleControl } = wp.components
const { __ } = wp.i18n

function ShowFeaturedOnly({ state, dispatch }) {
  function onChange(newVal) {
    dispatch({ type: 'UPDATE_SETTING', payload: { key: 'showFeaturedOnly', value: newVal } })
  }

  return (
    <ToggleControl
      label={__('Show featured only', wpshopify.misc.textdomain)}
      checked={state.payloadSettings.showFeaturedOnly}
      onChange={onChange}
    />
  )
}

export { ShowFeaturedOnly }
