import { withStore } from '../../../_common'

const { TextControl } = wp.components

function MinQuantity({ state, dispatch }) {
  function onChange(newVal) {
    dispatch({ type: 'UPDATE_SETTING', payload: { key: 'minQuantity', value: newVal } })
  }

  return (
    <TextControl
      type='Number'
      label='Min quantity'
      value={state.payloadSettings.minQuantity}
      onChange={onChange}
    />
  )
}

export { MinQuantity }
