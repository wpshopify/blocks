import { withStore } from '../../../_common'
const { ToggleControl } = wp.components

function HideQuantity({ state, dispatch }) {
  function onChange(newVal) {
    dispatch({ type: 'UPDATE_SETTING', payload: { key: 'hideQuantity', value: newVal } })
  }

  return (
    <ToggleControl
      label='Hide quantity'
      checked={state.payloadSettings.hideQuantity}
      onChange={onChange}
    />
  )
}

export { HideQuantity }
