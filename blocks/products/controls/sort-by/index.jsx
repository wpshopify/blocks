const { __ } = wp.i18n
const { SelectControl } = wp.components

function SortBy({ state, dispatch }) {
  const options = [
    { label: __('Title', 'wpshopify'), value: 'title' },
    { label: __('Vendor', 'wpshopify'), value: 'vendor' },
    { label: __('ID', 'wpshopify'), value: 'id' },
    { label: __('Price', 'wpshopify'), value: 'price' },
    { label: __('Best selling', 'wpshopify'), value: 'best_selling' },
    { label: __('Product type', 'wpshopify'), value: 'product_type' },
    { label: __('Created at', 'wpshopify'), value: 'created_at' },
    { label: __('Updated at', 'wpshopify'), value: 'updated_at' }
  ]

  function onChange(newVal) {
    dispatch({ type: 'SET_IS_LOADING', payload: true })
    dispatch({ type: 'UPDATE_QUERY_PARAMS', payload: { sortKey: newVal } })
    dispatch({ type: 'UPDATE_SETTING', payload: { key: 'sortBy', value: newVal } })
  }

  return (
    <SelectControl
      label={__('Sort by', 'wpshopify')}
      help='Note: sorting by price will take all variant prices into consideration'
      value={state.payloadSettings.sortBy}
      options={options}
      onChange={onChange}
    />
  )
}

export { SortBy }
