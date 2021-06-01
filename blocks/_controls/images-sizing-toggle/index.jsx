import { useBlockDispatch } from '../../_state/hooks';

function ImagesSizingToggle({ state }) {
  const { ToggleControl } = wp.components;
  const { useState } = wp.element;
  const [val, setVal] = useState(state);
  const dispatch = useBlockDispatch();

  function onChange(newVal) {
    dispatch({ type: 'UPDATE_SETTING', payload: { key: 'imagesSizingToggle', value: newVal } });
    setVal(newVal);
  }

  return (
    <ToggleControl
      label={wp.i18n.__('Enable featured image sizing', 'wpshopify')}
      checked={val}
      onChange={onChange}
    />
  );
}

export default wp.element.memo(ImagesSizingToggle);
