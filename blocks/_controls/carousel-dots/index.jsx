import { useBlockDispatch } from '../../_state/hooks';

function CarouselDots({ dots }) {
  const { ToggleControl } = wp.components;
  const dispatch = useBlockDispatch();

  function onChange(isChecked) {
    dispatch({
      type: 'UPDATE_SETTING',
      payload: { key: 'carouselDots', value: isChecked },
    });
  }

  return (
    <ToggleControl
      label={wp.i18n.__('Show carousel dots?', 'wpshopify')}
      checked={dots}
      onChange={onChange}
    />
  );
}

export default wp.element.memo(CarouselDots);
