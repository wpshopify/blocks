import { useBlockDispatch } from '../../_state/hooks';

function Pagination({ pagination }) {
  const { ToggleControl } = wp.components;
  const dispatch = useBlockDispatch();

  function onChange(newVal) {
    dispatch({ type: 'UPDATE_SETTING', payload: { key: 'pagination', value: newVal } });
  }

  return (
    <ToggleControl
      label={wp.i18n.__('Show pagination', 'wpshopify')}
      checked={pagination}
      onChange={onChange}
    />
  );
}

export default wp.element.memo(Pagination);
