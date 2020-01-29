import { withStore } from '../../../_common'
const { SelectControl } = wp.components

function SortBy({ state, dispatch }) {
  const options = [
    { label: 'Title', value: 'title' },
    { label: 'Vendor', value: 'vendor' },
    { label: 'ID', value: 'id' },
    { label: 'Price', value: 'price' },
    { label: 'Best selling', value: 'best_selling' },
    { label: 'Product type', value: 'product_type' },
    { label: 'Created at', value: 'created_at' },
    { label: 'Updated at', value: 'updated_at' }
  ]

  function onChange(newVal) {
    dispatch({ type: 'UPDATE_SETTING', payload: { key: 'sortBy', value: newVal } })
  }

  return (
    <SelectControl
      label='Sort by'
      value={state.payloadSettings.sortBy}
      options={options}
      onChange={onChange}
    />
  )
}

export { SortBy }
