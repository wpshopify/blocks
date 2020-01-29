import { withStore } from '../../../_common'
const { ToggleControl } = wp.components
const { useEffect } = wp.element

function Pagination({ state, dispatch }) {
  function onChange(newVal) {
    dispatch({ type: 'UPDATE_SETTING', payload: { key: 'pagination', value: newVal } })
  }

  return (
    <ToggleControl
      label='Show pagination'
      checked={state.payloadSettings.pagination}
      onChange={onChange}
    />
  )
}

export { Pagination }
