function ImagesSizingWidth({ state, dispatch }) {
  const { TextControl } = wp.components
  function onChange(newVal) {
    dispatch({
      type: 'UPDATE_SETTING',
      payload: { key: 'imagesSizingWidth', value: parseInt(newVal) },
    })
  }

  return (
    <TextControl
      type='Number'
      label={wp.i18n.__('Width', 'wpshopify')}
      value={state.payloadSettings.imagesSizingWidth}
      onChange={onChange}
    />
  )
}

export default ImagesSizingWidth
