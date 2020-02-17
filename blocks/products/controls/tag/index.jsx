import { FilterTextControl } from '../../_common/filter-text-control'

function Tag({ state, dispatch }) {
  return (
    <FilterTextControl
      label='Filter by Tag'
      help='Match product tags. Separate multiple by comma.'
      settingName='tag'
      state={state}
      dispatch={dispatch}
    />
  )
}

export { Tag }
