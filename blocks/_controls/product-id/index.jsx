function ProductId({ state, dispatch }) {
  const { useState } = wp.element;
  const { TextControl } = wp.components;
  const [val, setVal] = useState(state.payloadSettings.productId);

  function onChange(newVal) {
    setVal(newVal);
    dispatch({ type: 'UPDATE_SETTING', payload: { key: 'productId', value: newVal } });
  }

  return (
    <TextControl
      label={wp.i18n.__('Product ID', 'wpshopify')}
      help={wp.i18n.__('Match product ids', 'wpshopify')}
      value={val}
      onChange={onChange}
    />
  );
}

export default wp.element.memo(ProductId);
