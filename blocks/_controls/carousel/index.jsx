import { useBlockDispatch } from '../../_state/hooks';

function Carousel({ carousel }) {
  const { ToggleControl } = wp.components;
  const dispatch = useBlockDispatch();

  function onChange(isChecked) {
    dispatch({
      type: 'UPDATE_SETTING',
      payload: { key: 'carousel', value: isChecked },
    });
  }

  return (
    <ToggleControl
      label={wp.i18n.__('Carousel?', 'wpshopify')}
      checked={carousel}
      onChange={onChange}
    />
  );
}

export default wp.element.memo(Carousel);
