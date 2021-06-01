import { useBlockDispatch } from '../../_state/hooks';

function HideQuantity({ hide }) {
  const { ToggleControl } = wp.components;
  const dispatch = useBlockDispatch();

  function onChange(newVal) {
    dispatch({ type: 'UPDATE_SETTING', payload: { key: 'hideQuantity', value: newVal } });
  }

  return (
    <ToggleControl
      label={wp.i18n.__('Hide quantity', 'wpshopify')}
      checked={hide}
      onChange={onChange}
    />
  );
}

export default wp.element.memo(HideQuantity);
