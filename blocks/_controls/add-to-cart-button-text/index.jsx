function AddToCartButtonText({ state, dispatch }) {
  const { useState } = wp.element
  const { TextControl } = wp.components
  const [val, setVal] = useState(state.payloadSettings.addToCartButtonText)

  function onChange(newVal) {
    setVal(newVal)
    dispatch({ type: 'UPDATE_SETTING', payload: { key: 'addToCartButtonText', value: newVal } })
  }

  return (
    <TextControl
      label={wp.i18n.__('Add to cart button text', 'wpshopify')}
      value={val}
      onChange={onChange}
    />
  )
}

export { AddToCartButtonText }
