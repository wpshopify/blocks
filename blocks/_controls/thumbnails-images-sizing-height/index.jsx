function ThumbnailsImagesSizingHeight({ state, dispatch }) {
  const { TextControl } = wp.components
  function onChange(newVal) {
    dispatch({
      type: 'UPDATE_SETTING',
      payload: { key: 'thumbnailImagesSizingHeight', value: parseInt(newVal) },
    })
  }

  return (
    <TextControl
      type='Number'
      label={wp.i18n.__('Height', 'wpshopify')}
      value={state.payloadSettings.thumbnailImagesSizingHeight}
      onChange={onChange}
    />
  )
}

export default ThumbnailsImagesSizingHeight
