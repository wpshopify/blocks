import { useBlockDispatch } from '../../_state/hooks';

function ShowCompareAt({ showCompareAt }) {
  const { ToggleControl } = wp.components;

  const dispatch = useBlockDispatch();

  function onChange(newVal) {
    dispatch({ type: 'UPDATE_SETTING', payload: { key: 'showCompareAt', value: newVal } });
  }

  return (
    <ToggleControl
      label={wp.i18n.__('Show compare at', 'wpshopify')}
      help={wp.i18n.__('Useful for showing sale pricing', 'wpshopify')}
      checked={showCompareAt}
      onChange={onChange}
    />
  );
}

export default wp.element.memo(ShowCompareAt);
