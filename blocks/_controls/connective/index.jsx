import { useBlockDispatch } from '../../_state/hooks';

function Connective({ state }) {
  const { RadioControl } = wp.components;
  const dispatch = useBlockDispatch();

  function onChange(newVal) {
    dispatch({ type: 'UPDATE_SETTING', payload: { key: 'connective', value: newVal } });
  }

  return (
    <RadioControl
      label={wp.i18n.__('Match criteria', 'wpshopify')}
      help={wp.i18n.__(
        'Determines how a match is found when filtering products. "OR" will attempt to match any products from the set filters. "AND" will only match products when all filters are true. Default is AND',
        'wpshopify'
      )}
      selected={state}
      options={[
        { label: wp.i18n.__('AND', 'wpshopify'), value: 'AND' },
        { label: wp.i18n.__('OR', 'wpshopify'), value: 'OR' },
      ]}
      onChange={onChange}
    />
  );
}

export default wp.element.memo(Connective);
