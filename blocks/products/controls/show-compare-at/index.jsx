import { withStore } from '../../../_common'

const { ToggleControl } = wp.components

function ShowCompareAt({ state, dispatch }) {
  function onChange(newVal) {
    dispatch({ type: 'UPDATE_SETTING', payload: { key: 'showCompareAt', value: newVal } })
  }

  return (
    <ToggleControl
      label='Show compare at'
      checked={state.payloadSettings.showCompareAt}
      onChange={onChange}
    />
  )
}

export { ShowCompareAt }
