function ShowCompareAt({ state, dispatch }) {
  const { ToggleControl } = wp.components
  function onChange(newVal) {
    dispatch({ type: 'UPDATE_SETTING', payload: { key: 'showCompareAt', value: newVal } })
  }

  return (
    <ToggleControl
      label={wp.i18n.__('Show compare at', 'wpshopify')}
      help={wp.i18n.__('Useful for showing sale pricing', 'wpshopify')}
      checked={state.payloadSettings.showCompareAt}
      onChange={onChange}
    />
  )
}

export { ShowCompareAt }
