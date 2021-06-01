import { useDebounce } from 'use-debounce';
import { useBlockDispatch } from '../../_state/hooks';

function ItemsPerRow({ itemsPerRow }) {
  const { useEffect, useState, useRef } = wp.element;
  const { RangeControl } = wp.components;
  const [localVal, setLocalVal] = useState(itemsPerRow);
  const [debouncedValue] = useDebounce(localVal, 100);
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

    dispatch({ type: 'UPDATE_SETTING', payload: { key: 'itemsPerRow', value: debouncedValue } });
  }, [debouncedValue]);

  return (
    <RangeControl
      label={wp.i18n.__('Items per row', 'wpshopify')}
      value={localVal}
      onChange={onChange}
      min={1}
      max={20}
    />
  );
}

export default wp.element.memo(ItemsPerRow);
