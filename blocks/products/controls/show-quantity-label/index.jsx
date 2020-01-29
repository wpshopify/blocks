import { withStore } from '../../../_common'

const { ToggleControl } = wp.components

function ShowQuantityLabel({ state, dispatch }) {
  function onChange(newVal) {
    dispatch({ type: 'UPDATE_SETTING', payload: { key: 'showQuantityLabel', value: newVal } })
  }

  return (
    <ToggleControl
      label='Show quantity label'
      checked={state.payloadSettings.showQuantityLabel}
      onChange={onChange}
    />
  )
}

export { ShowQuantityLabel }
