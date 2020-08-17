function ImagesSizingHeight({ state, dispatch }) {
  const { TextControl } = wp.components
  function onChange(newVal) {
    dispatch({
      type: 'UPDATE_SETTING',
      payload: { key: 'imagesSizingHeight', value: parseInt(newVal) },
    })
  }

  return (
    <TextControl
      type='Number'
      label={wp.i18n.__('Height', 'wpshopify')}
      value={state.payloadSettings.imagesSizingHeight}
      onChange={onChange}
    />
  )
}

export default ImagesSizingHeight
