function ThumbnailsImagesSizingCrop({ state, dispatch }) {
  const { SelectControl } = wp.components

  const options = [
    { label: wp.i18n.__('None', 'wpshopify'), value: 'none' },
    { label: wp.i18n.__('Top', 'wpshopify'), value: 'top' },
    { label: wp.i18n.__('Center', 'wpshopify'), value: 'center' },
    { label: wp.i18n.__('Bottom', 'wpshopify'), value: 'bottom' },
    { label: wp.i18n.__('Left', 'wpshopify'), value: 'left' },
    { label: wp.i18n.__('Right', 'wpshopify'), value: 'right' },
  ]

  function onChange(newVal) {
    dispatch({
      type: 'UPDATE_SETTING',
      payload: { key: 'thumbnailImagesSizingCrop', value: newVal },
    })
  }

  return (
    <SelectControl
      label={wp.i18n.__('Image crop position', 'wpshopify')}
      help={wp.i18n.__(
        "If the entire image won't fit in your set dimensions, the crop parameter specifies what part of the image to show.",
        'wpshopify'
      )}
      value={state.payloadSettings.thumbnailImagesSizingCrop}
      options={options}
      onChange={onChange}
    />
  )
}

export default ThumbnailsImagesSizingCrop
