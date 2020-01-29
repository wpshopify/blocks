import { withStore } from '../../../_common'
const { useState } = wp.element
const { TextControl } = wp.components

function CreatedAt({ state, dispatch }) {
  const [val, setVal] = useState(state.payloadSettings.createdAt)

  function onChange(newVal) {
    setVal(newVal)
    dispatch({ type: 'UPDATE_SETTING', payload: { key: 'createdAt', value: newVal } })
  }

  return (
    <TextControl
      label='Created At'
      value={val}
      help='Match product created at'
      onChange={onChange}
    />
  )
}

export { CreatedAt }
