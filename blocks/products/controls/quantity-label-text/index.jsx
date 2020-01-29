import { withStore } from '../../../_common'
const { TextControl } = wp.components

function QuantityLabelText({ state, dispatch }) {
  function onChange(newVal) {
    dispatch({ type: 'UPDATE_SETTING', payload: { key: 'quantityLabelText', value: newVal } })
  }

  return (
    state.payloadSettings.showQuantityLabel && (
      <TextControl
        label='Quantity label text'
        value={state.payloadSettings.quantityLabelText}
        onChange={onChange}
      />
    )
  )
}

export { QuantityLabelText }
