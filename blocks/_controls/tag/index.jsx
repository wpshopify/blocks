import FilterTextControl from '../_common/filter-text-control';

function Tag({ state, isLoading }) {
  return (
    <FilterTextControl
      label={wp.i18n.__('Filter by Tag', 'wpshopify')}
      help={wp.i18n.__('Match product tags. Separate multiple by comma.', 'wpshopify')}
      settingName='tag'
      state={state}
      isLoading={isLoading}
    />
  );
}

export default wp.element.memo(Tag);
