function ImagesSizingToggle({ state, dispatch }) {
  const { ToggleControl } = wp.components
  const { useState } = wp.element
  const [val, setVal] = useState(state.payloadSettings.imagesSizingToggle)

  function onChange(newVal) {
    dispatch({ type: 'UPDATE_SETTING', payload: { key: 'imagesSizingToggle', value: newVal } })
    setVal(newVal)
  }

  return (
    <ToggleControl
      label={wp.i18n.__('Enable featured image sizing', 'wpshopify')}
      checked={val}
      onChange={onChange}
    />
  )
}

export default ImagesSizingToggle
