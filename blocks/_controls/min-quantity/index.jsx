import { useBlockDispatch } from '../../_state/hooks';

function MinQuantity({ min }) {
  const { TextControl } = wp.components;
  const dispatch = useBlockDispatch();

  function onChange(newVal) {
    if (!newVal || newVal === 0 || newVal === '0') {
      newVal = 1;
    }
    dispatch({ type: 'UPDATE_SETTING', payload: { key: 'minQuantity', value: newVal } });
  }

  return (
    <TextControl
      type='Number'
      label={wp.i18n.__('Min quantity', 'wpshopify')}
      value={min}
      onChange={onChange}
    />
  );
}

export default wp.element.memo(MinQuantity);
