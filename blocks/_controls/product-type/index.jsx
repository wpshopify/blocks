import { FilterTextControl } from '../_common/filter-text-control'

function ProductType({ state, dispatch }) {
  return (
    <FilterTextControl
      label='Filter by Product Type'
      help='Match product types. Separate multiple by comma.'
      settingName='productType'
      state={state}
      dispatch={dispatch}
    />
  )
}

export { ProductType }
