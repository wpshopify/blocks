import { useBlockDispatch } from '../../_state/hooks';

function ThumbnailsImagesSizingHeight({ height }) {
  const { TextControl } = wp.components;
  const dispatch = useBlockDispatch();

  function onChange(newVal) {
    dispatch({
      type: 'UPDATE_SETTING',
      payload: { key: 'thumbnailImagesSizingHeight', value: parseInt(newVal) },
    });
  }

  return (
    <TextControl
      type='Number'
      label={wp.i18n.__('Height', 'wpshopify')}
      value={height}
      onChange={onChange}
    />
  );
}

export default wp.element.memo(ThumbnailsImagesSizingHeight);
