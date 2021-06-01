import { useBlockDispatch } from '../../_state/hooks';

function ThumbnailsImagesSizingToggle({ toggle }) {
  const { ToggleControl } = wp.components;
  const { useState } = wp.element;
  const [val, setVal] = useState(toggle);
  const dispatch = useBlockDispatch();

  function onChange(newVal) {
    dispatch({
      type: 'UPDATE_SETTING',
      payload: { key: 'thumbnailImagesSizingToggle', value: newVal },
    });
    setVal(newVal);
  }

  return (
    <ToggleControl
      label={wp.i18n.__('Enable thumbnail image sizing', 'wpshopify')}
      checked={val}
      onChange={onChange}
    />
  );
}

export default wp.element.memo(ThumbnailsImagesSizingToggle);
