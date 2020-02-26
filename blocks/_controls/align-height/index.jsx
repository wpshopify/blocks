const { ToggleControl } = wp.components
const { __ } = wp.i18n

function AlignHeight({ state, dispatch }) {
  function onChange(isChecked) {
    dispatch({
      type: 'UPDATE_SETTING',
      payload: { key: 'alignHeight', value: isChecked }
    })
  }

  return (
    <ToggleControl
      label={__('Align height?', wpshopify.misc.textdomain)}
      checked={state.payloadSettings.alignHeight}
      onChange={onChange}
    />
  )
}

export { AlignHeight }
