import { useBlockDispatch } from '../../_state/hooks';

function ImagesSizingCrop({ crop }) {
  const { SelectControl } = wp.components;
  const dispatch = useBlockDispatch();

  const options = [
    { label: wp.i18n.__('None', 'wpshopify'), value: 'none' },
    { label: wp.i18n.__('Top', 'wpshopify'), value: 'top' },
    { label: wp.i18n.__('Center', 'wpshopify'), value: 'center' },
    { label: wp.i18n.__('Bottom', 'wpshopify'), value: 'bottom' },
    { label: wp.i18n.__('Left', 'wpshopify'), value: 'left' },
    { label: wp.i18n.__('Right', 'wpshopify'), value: 'right' },
  ];

  function onChange(newVal) {
    dispatch({ type: 'UPDATE_SETTING', payload: { key: 'imagesSizingCrop', value: newVal } });
  }

  return (
    <SelectControl
      label={wp.i18n.__('Image crop position', 'wpshopify')}
      help={wp.i18n.__(
        "If the entire image won't fit in your set dimensions, the crop parameter specifies what part of the image to show.",
        'wpshopify'
      )}
      value={crop}
      options={options}
      onChange={onChange}
    />
  );
}

export default wp.element.memo(ImagesSizingCrop);
