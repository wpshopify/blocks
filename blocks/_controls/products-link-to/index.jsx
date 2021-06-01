import { useBlockDispatch } from '../../_state/hooks';

function ProductsLinkTo({ linkTo }) {
  const { SelectControl } = wp.components;
  const dispatch = useBlockDispatch();

  const options = [
    { label: wp.i18n.__('WordPress', 'wpshopify'), value: 'wordpress' },
    { label: wp.i18n.__('Shopify', 'wpshopify'), value: 'shopify' },
    { label: wp.i18n.__('None', 'wpshopify'), value: 'none' },
    { label: wp.i18n.__('Modal', 'wpshopify'), value: 'modal' },
  ];

  function onChange(newVal) {
    dispatch({ type: 'UPDATE_SETTING', payload: { key: 'linkTo', value: newVal } });
  }

  return (
    <SelectControl
      label={wp.i18n.__('Products should link to:', 'wpshopify')}
      help={
        linkTo === 'wordpress' &&
        wp.i18n.__(
          'You must sync your single pages before this link option will work.',
          'wpshopify'
        )
      }
      value={linkTo}
      options={options}
      onChange={onChange}
    />
  );
}

export default wp.element.memo(ProductsLinkTo);
