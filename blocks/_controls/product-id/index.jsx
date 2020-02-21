const { __ } = wp.i18n
const { useState } = wp.element
const { TextControl } = wp.components

function ProductId({ state, dispatch }) {
  const [val, setVal] = useState(state.payloadSettings.productId)

  function onChange(newVal) {
    setVal(newVal)
    dispatch({ type: 'UPDATE_SETTING', payload: { key: 'productId', value: newVal } })
  }

  return (
    <TextControl
      label={__('Product ID', 'wpshopify')}
      value={val}
      help={__('Match product ids', 'wpshopify')}
      onChange={onChange}
    />
  )
}

export { ProductId }
