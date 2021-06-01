import FilterTextControl from '../_common/filter-text-control';

function Title({ title, isLoading }) {
  return (
    <FilterTextControl
      label={wp.i18n.__('Filter by Title', 'wpshopify')}
      help={wp.i18n.__('Match product titles. Separate multiple by comma.', 'wpshopify')}
      settingName='title'
      state={title}
      isLoading={isLoading}
    />
  );
}

export default wp.element.memo(Title);
