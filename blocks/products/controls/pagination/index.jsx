const { ToggleControl } = wp.components
const { __ } = wp.i18n

function Pagination({ state, dispatch }) {
  function onChange(newVal) {
    dispatch({ type: 'UPDATE_SETTING', payload: { key: 'pagination', value: newVal } })
  }

  return (
    <ToggleControl
      label={__('Show pagination', 'wpshopify')}
      checked={state.payloadSettings.pagination}
      onChange={onChange}
    />
  )
}

export { Pagination }
