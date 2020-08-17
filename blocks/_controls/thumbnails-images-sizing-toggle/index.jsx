function ThumbnailsImagesSizingToggle({ state, dispatch }) {
  const { ToggleControl } = wp.components
  const { useState } = wp.element
  const [val, setVal] = useState(state.payloadSettings.thumbnailImagesSizingToggle)

  function onChange(newVal) {
    dispatch({
      type: 'UPDATE_SETTING',
      payload: { key: 'thumbnailImagesSizingToggle', value: newVal },
    })
    setVal(newVal)
  }

  return (
    <ToggleControl
      label={wp.i18n.__('Enable thumbnail image sizing', 'wpshopify')}
      checked={val}
      onChange={onChange}
    />
  )
}

export default ThumbnailsImagesSizingToggle
