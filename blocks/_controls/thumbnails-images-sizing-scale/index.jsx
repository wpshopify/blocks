import { useBlockDispatch } from '../../_state/hooks';

function ThumbnailsImagesSizingScale({ scale }) {
  const { SelectControl } = wp.components;
  const dispatch = useBlockDispatch();

  const options = [
    { label: wp.i18n.__('None', 'wpshopify'), value: 1 },
    { label: wp.i18n.__('2', 'wpshopify'), value: 2 },
    { label: wp.i18n.__('3', 'wpshopify'), value: 3 },
  ];

  function onChange(newVal) {
    dispatch({
      type: 'UPDATE_SETTING',
      payload: { key: 'thumbnailImagesSizingScale', value: parseInt(newVal) },
    });
  }

  return (
    <SelectControl
      label={wp.i18n.__('Image scale', 'wpshopify')}
      help={wp.i18n.__(
        'Sets a custom scale for all product images. The number here will be multiplied by the dimensions set above. For example, an image originally 450x450 will return an image 900x900 pixels. Will only scale up if the original image is large enough. If original image is too small, the closest image in size will be returned.',
        'wpshopify'
      )}
      value={scale}
      options={options}
      onChange={onChange}
    />
  );
}

export default wp.element.memo(ThumbnailsImagesSizingScale);
