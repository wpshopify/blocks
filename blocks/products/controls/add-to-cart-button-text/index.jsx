import { withStore } from '../../../_common'
const { useState } = wp.element
const { TextControl } = wp.components

function AddToCartButtonText({ state, dispatch }) {
  const [val, setVal] = useState(state.payloadSettings.addToCartButtonText)

  function onChange(newVal) {
    setVal(newVal)
    dispatch({ type: 'UPDATE_SETTING', payload: { key: 'addToCartButtonText', value: newVal } })
  }

  return <TextControl label='Add to cart button text' value={val} onChange={onChange} />
}

export { AddToCartButtonText }
