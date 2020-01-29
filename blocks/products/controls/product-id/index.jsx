import { withStore } from '../../../_common'

const { useState } = wp.element
const { TextControl } = wp.components

function ProductId({ state, dispatch }) {
  const [val, setVal] = useState(state.payloadSettings.productId)

  function onChange(newVal) {
    setVal(newVal)
    dispatch({ type: 'UPDATE_SETTING', payload: { key: 'productId', value: newVal } })
  }

  return <TextControl label='Product ID' value={val} help='Match product ids' onChange={onChange} />
}

export { ProductId }
