import { useBlockDispatch } from '../../_state/hooks';

function CarouselInfinite({ infinite }) {
  const { ToggleControl } = wp.components;
  const dispatch = useBlockDispatch();

  function onChange(isChecked) {
    dispatch({
      type: 'UPDATE_SETTING',
      payload: { key: 'carouselInfinite', value: isChecked },
    });
  }

  return (
    <ToggleControl
      label={wp.i18n.__('Scroll infinitely?', 'wpshopify')}
      checked={infinite}
      onChange={onChange}
    />
  );
}

export default wp.element.memo(CarouselInfinite);
