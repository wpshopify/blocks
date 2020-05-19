import { FilterTextControl } from '../_common/filter-text-control'

function Vendor({ state, dispatch }) {
  return (
    <FilterTextControl
      label={wp.i18n.__('Filter by Vendor', 'wpshopify')}
      help={wp.i18n.__('Match product vendors. Separate multiple by comma.', 'wpshopify')}
      settingName='vendor'
      state={state}
      dispatch={dispatch}
    />
  )
}

export { Vendor }
