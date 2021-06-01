import { useBlockDispatch } from '../../_state/hooks';

function ShowFeaturedOnly({ showFeaturedOnly }) {
  const { ToggleControl } = wp.components;

  const dispatch = useBlockDispatch();

  function onChange(newVal) {
    dispatch({ type: 'UPDATE_SETTING', payload: { key: 'showFeaturedOnly', value: newVal } });
  }

  return (
    <ToggleControl
      label={wp.i18n.__('Show featured only', 'wpshopify')}
      checked={showFeaturedOnly}
      onChange={onChange}
    />
  );
}

export default wp.element.memo(ShowFeaturedOnly);
