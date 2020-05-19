function Pagination({ state, dispatch }) {
  const { ToggleControl } = wp.components

  function onChange(newVal) {
    dispatch({ type: 'UPDATE_SETTING', payload: { key: 'pagination', value: newVal } })
  }

  return (
    <ToggleControl
      label={wp.i18n.__('Show pagination', 'wpshopify')}
      checked={state.payloadSettings.pagination}
      onChange={onChange}
    />
  )
}

export { Pagination }
