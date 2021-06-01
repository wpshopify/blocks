import { useBlockDispatch } from '../../_state/hooks';

function ImagesSizingWidth({ width }) {
  const { TextControl } = wp.components;
  const dispatch = useBlockDispatch();

  function onChange(newVal) {
    dispatch({
      type: 'UPDATE_SETTING',
      payload: { key: 'imagesSizingWidth', value: parseInt(newVal) },
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

export default wp.element.memo(ImagesSizingWidth);
