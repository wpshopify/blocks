const { ToggleControl } = wp.components
const { __ } = wp.i18n

function ShowCompareAt({ state, dispatch }) {
  function onChange(newVal) {
    dispatch({ type: 'UPDATE_SETTING', payload: { key: 'showCompareAt', value: newVal } })
  }

  return (
    <ToggleControl
      label={__('Show compare at', wpshopify.misc.textdomain)}
      checked={state.payloadSettings.showCompareAt}
      onChange={onChange}
    />
  )
}

export { ShowCompareAt }
