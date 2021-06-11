import { useBlockDispatch } from '../../_state/hooks';

function CarouselSlidesToShow({ slides }) {
  const { TextControl } = wp.components;
  const dispatch = useBlockDispatch();

  function onChange(newVal) {
    dispatch({
      type: 'UPDATE_SETTING',
      payload: { key: 'carouselSlidesToShow', value: parseInt(newVal) },
    });
  }

  return (
    <TextControl
      type='Number'
      label={wp.i18n.__('Number of slides to show', 'wpshopify')}
      value={slides}
      onChange={onChange}
    />
  );
}

export default wp.element.memo(CarouselSlidesToShow);
