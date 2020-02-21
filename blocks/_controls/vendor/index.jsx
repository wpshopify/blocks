import { FilterTextControl } from '../_common/filter-text-control'

function Vendor({ state, dispatch }) {
  return (
    <FilterTextControl
      label='Filter by Vendor'
      help='Match product vendors. Separate multiple by comma.'
      settingName='vendor'
      state={state}
      dispatch={dispatch}
    />
  )
}

export { Vendor }
