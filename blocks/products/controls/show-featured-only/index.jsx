import { withStore } from '../../../_common'
const { ToggleControl } = wp.components

function ShowFeaturedOnly({ state, dispatch }) {
  function onChange(newVal) {
    dispatch({ type: 'UPDATE_SETTING', payload: { key: 'showFeaturedOnly', value: newVal } })
  }

  return (
    <ToggleControl
      label='Show featured only'
      checked={state.payloadSettings.showFeaturedOnly}
      onChange={onChange}
    />
  )
}

export { ShowFeaturedOnly }
