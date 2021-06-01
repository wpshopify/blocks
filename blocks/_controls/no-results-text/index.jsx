import { useDebounce } from 'use-debounce';

function NoResultsText({ state, dispatch }) {
  const { useEffect, useState, useRef } = wp.element;
  const { TextControl } = wp.components;
  const [localVal, setLocalVal] = useState(state.payloadSettings.noResultsText);
  const [debouncedValue] = useDebounce(localVal, 250);
  const isFirstRender = useRef(true);

  function onChange(newVal) {
    setLocalVal(newVal);
  }

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    if (localVal !== state.payloadSettings.noResultsText) {
      dispatch({ type: 'UPDATE_SETTING', payload: { key: 'noResultsText', value: localVal } });
    }
  }, [debouncedValue]);

  useEffect(() => {
    setLocalVal(state.payloadSettings.noResultsText);
  }, [state.payloadSettings.noResultsText]);

  return (
    <TextControl
      label={wp.i18n.__('No results text', 'wpshopify')}
      value={localVal}
      onChange={onChange}
    />
  );
}

export default wp.element.memo(NoResultsText);
