import { useBlockDispatch } from '../../_state/hooks';

function DirectCheckout({ directCheckout }) {
  const { ToggleControl } = wp.components;
  const dispatch = useBlockDispatch();

  function onChange(isChecked) {
    dispatch({
      type: 'UPDATE_SETTING',
      payload: { key: 'directCheckout', value: isChecked },
    });
  }

  return (
    <ToggleControl
      label={wp.i18n.__('Enable direct checkout', 'wpshopify')}
      checked={directCheckout}
      onChange={onChange}
    />
  );
}

export default wp.element.memo(DirectCheckout);
