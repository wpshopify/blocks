import { FilterTextControl } from '../_common/filter-text-control'

function ProductType({ state, dispatch }) {
  return (
    <FilterTextControl
      label={wp.i18n.__('Filter by Product Type', 'wpshopify')}
      help={wp.i18n.__('Match product types. Separate multiple by comma.', 'wpshopify')}
      settingName='productType'
      state={state}
      dispatch={dispatch}
    />
  )
}

export { ProductType }
