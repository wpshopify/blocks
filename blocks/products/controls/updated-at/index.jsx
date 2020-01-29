import { withStore } from '../../../_common'

const { useState } = wp.element
const { TextControl } = wp.components

function UpdatedAt({ state, dispatch }) {
  const [val, setVal] = useState(state.payloadSettings.updatedAt)

  function onChange(newVal) {
    setVal(newVal)
    dispatch({ type: 'UPDATE_SETTING', payload: { key: 'updatedAt', value: newVal } })
  }

  return (
    <TextControl
      label='Updated At'
      value={val}
      help='Match product updated at'
      onChange={onChange}
    />
  )
}

export { UpdatedAt }
