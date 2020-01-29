import { withStore } from '../../../_common'
const { ToggleControl } = wp.components

function ShowZoom({ state, dispatch }) {
  function onChange(newVal) {
    dispatch({ type: 'UPDATE_SETTING', payload: { key: 'showZoom', value: newVal } })
  }

  return (
    <ToggleControl label='Show zoom' checked={state.payloadSettings.showZoom} onChange={onChange} />
  )
}

export { ShowZoom }
