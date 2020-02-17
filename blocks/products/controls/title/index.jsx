import { FilterTextControl } from '../../_common/filter-text-control'

function Title({ state, dispatch }) {
  return (
    <FilterTextControl
      label='Filter by Title'
      help='Match product titles. Separate multiple by comma.'
      settingName='title'
      state={state}
      dispatch={dispatch}
    />
  )
}

export { Title }
