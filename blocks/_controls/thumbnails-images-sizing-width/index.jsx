function ThumbnailsImagesSizingWidth({ state, dispatch }) {
  const { TextControl } = wp.components

  function onChange(newVal) {
    dispatch({
      type: 'UPDATE_SETTING',
      payload: { key: 'thumbnailImagesSizingWidth', value: parseInt(newVal) },
    })
  }

  return (
    <TextControl
      type='Number'
      label={wp.i18n.__('Width', 'wpshopify')}
      value={state.payloadSettings.thumbnailImagesSizingWidth}
      onChange={onChange}
    />
  )
}

export default ThumbnailsImagesSizingWidth
