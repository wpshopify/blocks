import { FilterTextControl } from '../_common/filter-text-control'

function Collection({ state, dispatch }) {
  return (
    <FilterTextControl
      label={wp.i18n.__('Filter by Collection', 'wpshopify')}
      help={wp.i18n.__(
        'Filter products which belong to a collection. Only matches one collection.',
        'wpshopify'
      )}
      settingName='collection'
      state={state}
      dispatch={dispatch}
    />
  )
}

export { Collection }
