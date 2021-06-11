/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { useBlockDispatch } from '../../_state/hooks';
import { useDebounce } from 'use-debounce';

function CarouselSpeed({ speed }) {
  const { useEffect, useState, useRef } = wp.element;
  const { RangeControl } = wp.components;
  const [localVal, setLocalVal] = useState(speed);
  const [debouncedValue] = useDebounce(localVal, 150);
  const isFirstRender = useRef(true);
  const dispatch = useBlockDispatch();

  function onChange(newVal) {
    setLocalVal(newVal);
  }

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    dispatch({ type: 'UPDATE_SETTING', payload: { key: 'carouselSpeed', value: debouncedValue } });
  }, [debouncedValue]);

  return (
    <div>
      <RangeControl
        label={wp.i18n.__('Carousel speed', 'wpshopify')}
        value={localVal}
        onChange={onChange}
        min={100}
        step={100}
        max={4000}
      />
    </div>
  );
}

export default wp.element.memo(CarouselSpeed);
