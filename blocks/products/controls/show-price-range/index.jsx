import { withStore } from '../../../_common'

const { ToggleControl } = wp.components

function ShowPriceRange({ state, dispatch }) {
  function onChange(newVal) {
    dispatch({ type: 'UPDATE_SETTING', payload: { key: 'showPriceRange', value: newVal } })
  }

  return (
    <ToggleControl
      label='Show price range'
      checked={state.payloadSettings.showPriceRange}
      onChange={onChange}
    />
  )
}

export { ShowPriceRange }
