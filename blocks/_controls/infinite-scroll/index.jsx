import { useBlockDispatch } from '../../_state/hooks';

function InfiniteScroll({ infiniteScroll }) {
  const { ToggleControl } = wp.components;
  const dispatch = useBlockDispatch();

  function onChange(newVal) {
    dispatch({ type: 'UPDATE_SETTING', payload: { key: 'infiniteScroll', value: newVal } });
  }

  return (
    <ToggleControl
      label={wp.i18n.__('Infinite scroll?', 'wpshopify')}
      checked={infiniteScroll}
      onChange={onChange}
    />
  );
}

export default wp.element.memo(InfiniteScroll);
