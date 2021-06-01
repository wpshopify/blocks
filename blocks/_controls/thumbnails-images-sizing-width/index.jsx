import { useBlockDispatch } from '../../_state/hooks';

function ThumbnailsImagesSizingWidth({ width }) {
  const { TextControl } = wp.components;
  const dispatch = useBlockDispatch();

  function onChange(newVal) {
    dispatch({
      type: 'UPDATE_SETTING',
      payload: { key: 'thumbnailImagesSizingWidth', value: parseInt(newVal) },
    });
  }

  return (
    <TextControl
      type='Number'
      label={wp.i18n.__('Width', 'wpshopify')}
      value={width}
      onChange={onChange}
    />
  );
}

export default wp.element.memo(ThumbnailsImagesSizingWidth);
