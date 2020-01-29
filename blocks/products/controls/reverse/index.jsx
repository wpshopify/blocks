import { withStore } from '../../../_common'
const { CheckboxControl } = wp.components

function Reverse({ state, dispatch }) {
  function onChange(newVal) {
    dispatch({ type: 'UPDATE_SETTING', payload: { key: 'reverse', value: newVal } })
  }

  return (
    <CheckboxControl
      label='Reverse order?'
      checked={state.payloadSettings.reverse}
      onChange={onChange}
    />
  )
}

export { Reverse }
