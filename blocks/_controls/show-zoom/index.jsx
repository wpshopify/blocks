import { useBlockDispatch } from '../../_state/hooks';

function ShowZoom({ showZoom }) {
  const { ToggleControl } = wp.components;
  const dispatch = useBlockDispatch();

  function onChange(newVal) {
    dispatch({ type: 'UPDATE_SETTING', payload: { key: 'showZoom', value: newVal } });
  }

  return (
    <ToggleControl
      label={wp.i18n.__('Show zoom', 'wpshopify')}
      checked={showZoom}
      onChange={onChange}
    />
  );
}

export default wp.element.memo(ShowZoom);
