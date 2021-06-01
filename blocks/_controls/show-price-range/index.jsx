import { useBlockDispatch } from '../../_state/hooks';

function ShowPriceRange({ showPriceRange }) {
  const { ToggleControl } = wp.components;

  const dispatch = useBlockDispatch();

  function onChange(newVal) {
    dispatch({ type: 'UPDATE_SETTING', payload: { key: 'showPriceRange', value: newVal } });
  }

  return (
    <ToggleControl
      label={wp.i18n.__('Show price range', 'wpshopify')}
      checked={showPriceRange}
      onChange={onChange}
    />
  );
}

export default wp.element.memo(ShowPriceRange);
