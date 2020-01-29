import { withStore } from '../../../_common'
const { TextControl } = wp.components

function MaxQuantity({ state, dispatch }) {
  function onChange(newVal) {
    dispatch({ type: 'UPDATE_SETTING', payload: { key: 'maxQuantity', value: newVal } })
  }

  return (
    <TextControl
      type='Number'
      label='Max quantity'
      value={state.payloadSettings.maxQuantity}
      onChange={onChange}
    />
  )
}

export { MaxQuantity }
