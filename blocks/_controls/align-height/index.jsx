import { useBlockDispatch } from '../../_state/hooks';

function AlignHeight({ height }) {
  const { ToggleControl } = wp.components;
  const dispatch = useBlockDispatch();

  function onChange(isChecked) {
    dispatch({
      type: 'UPDATE_SETTING',
      payload: { key: 'alignHeight', value: isChecked },
    });
  }

  return (
    <ToggleControl
      label={wp.i18n.__('Align height?', 'wpshopify')}
      checked={height}
      onChange={onChange}
    />
  );
}

export default wp.element.memo(AlignHeight);
