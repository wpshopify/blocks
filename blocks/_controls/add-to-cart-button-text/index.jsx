const { useState } = wp.element
const { TextControl } = wp.components
const { __ } = wp.i18n

function AddToCartButtonText({ state, dispatch }) {
  const [val, setVal] = useState(state.payloadSettings.addToCartButtonText)

  function onChange(newVal) {
    setVal(newVal)
    dispatch({ type: 'UPDATE_SETTING', payload: { key: 'addToCartButtonText', value: newVal } })
  }

  return (
    <TextControl
      label={__('Add to cart button text', wpshopify.misc.textdomain)}
      value={val}
      onChange={onChange}
    />
  )
}

export { AddToCartButtonText }
