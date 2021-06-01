import { useBlockDispatch } from '../../_state/hooks';

function MaxQuantity({ max }) {
  const { TextControl } = wp.components;
  const dispatch = useBlockDispatch();

  function onChange(newVal) {
    dispatch({ type: 'UPDATE_SETTING', payload: { key: 'maxQuantity', value: newVal } });
  }

  return (
    <TextControl
      type='Number'
      label={wp.i18n.__('Max quantity', 'wpshopify')}
      value={max}
      onChange={onChange}
    />
  );
}

export default wp.element.memo(MaxQuantity);
