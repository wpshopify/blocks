import FilterTextControl from '../_common/filter-text-control';

function Collection({ state, isLoading }) {
  return (
    <FilterTextControl
      label={wp.i18n.__('Filter by Collection', 'wpshopify')}
      help={wp.i18n.__(
        'Filter products which belong to a collection. Only matches one collection.',
        'wpshopify'
      )}
      settingName='collection'
      state={state}
      isLoading={isLoading}
    />
  );
}

export default wp.element.memo(Collection);
