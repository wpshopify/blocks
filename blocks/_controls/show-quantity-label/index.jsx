import { useBlockDispatch } from '../../_state/hooks';

function ShowQuantityLabel({ show }) {
  const { ToggleControl } = wp.components;
  const dispatch = useBlockDispatch();

  function onChange(newVal) {
    dispatch({ type: 'UPDATE_SETTING', payload: { key: 'showQuantityLabel', value: newVal } });
  }

  return (
    <ToggleControl
      label={wp.i18n.__('Show quantity label', 'wpshopify')}
      checked={show}
      onChange={onChange}
    />
  );
}

export default wp.element.memo(ShowQuantityLabel);
