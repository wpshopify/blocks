import { useBlockDispatch } from '../../_state/hooks';

function Limit({ limit }) {
  const { TextControl } = wp.components;
  const dispatch = useBlockDispatch();

  function onLimitChange(newVal) {
    dispatch({ type: 'SET_IS_LOADING', payload: true });

    if (!newVal) {
      dispatch({ type: 'UPDATE_SETTING', payload: { key: 'limit', value: false } });
    } else {
      var newLimitNum = parseInt(newVal);

      dispatch({ type: 'UPDATE_SETTING', payload: { key: 'limit', value: newLimitNum } });
    }
  }

  return (
    <TextControl
      label={wp.i18n.__('Limit products?', 'wpshopify')}
      help={wp.i18n.__(
        'Sets the number of products shown. This will take precedence over the page size setting.',
        'wpshopify'
      )}
      value={limit}
      onChange={onLimitChange}
      type='number'
    />
  );
}

export default wp.element.memo(Limit);
