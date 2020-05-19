function AlignHeight({ state, dispatch }) {
  const { ToggleControl } = wp.components

  function onChange(isChecked) {
    dispatch({
      type: 'UPDATE_SETTING',
      payload: { key: 'alignHeight', value: isChecked },
    })
  }

  return (
    <ToggleControl
      label={wp.i18n.__('Align height?', 'wpshopify')}
      checked={state.payloadSettings.alignHeight}
      onChange={onChange}
    />
  )
}

export { AlignHeight }
