import { useBlockDispatch } from '../../_state/hooks';

function ProductsLinkTarget({ linkTarget, linkTo }) {
  const { SelectControl, Disabled } = wp.components;
  const dispatch = useBlockDispatch();

  const options = [
    { label: wp.i18n.__('Current tab / window', 'wpshopify'), value: '_self' },
    { label: wp.i18n.__('New tab / window', 'wpshopify'), value: '_blank' },
  ];

  function onChange(newVal) {
    dispatch({ type: 'UPDATE_SETTING', payload: { key: 'linkTarget', value: newVal } });
  }

  return linkTo === 'none' ? (
    <Disabled>
      <SelectControl
        label={wp.i18n.__('Product links should open in:', 'wpshopify')}
        value={linkTarget}
        options={options}
        onChange={onChange}
      />
    </Disabled>
  ) : (
    <SelectControl
      label={wp.i18n.__('Product links should open in:', 'wpshopify')}
      value={linkTarget}
      options={options}
      onChange={onChange}
    />
  );
}

export default wp.element.memo(ProductsLinkTarget);
