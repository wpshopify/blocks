import { useDebounce } from 'use-debounce';
import { useBlockDispatch } from '../../_state/hooks';

function DescriptionLength({ length }) {
  const { useEffect, useState, useRef } = wp.element;
  const { RangeControl } = wp.components;
  const [localVal, setLocalVal] = useState(length);
  const [debouncedValue] = useDebounce(localVal, 10);
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

    dispatch({
      type: 'UPDATE_SETTING',
      payload: { key: 'descriptionLength', value: debouncedValue },
    });
  }, [debouncedValue]);

  useEffect(() => {
    setLocalVal(length);
  }, [length]);

  return (
    <RangeControl
      label={wp.i18n.__('Limit Description Length', 'wpshopify')}
      help={wp.i18n.__('Limits the number of characters', 'wpshopify')}
      value={localVal}
      onChange={onChange}
      min={1}
      max={200}
    />
  );
}

export default wp.element.memo(DescriptionLength);
