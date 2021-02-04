import { useDebounce } from 'use-debounce';
/** @jsx jsx */
import { jsx, css } from '@emotion/react';

function PageSize({ state, dispatch }) {
  const { useEffect, useState, useRef } = wp.element;
  const { RangeControl, Spinner } = wp.components;
  const [localVal, setLocalVal] = useState(state.payloadSettings.pageSize);
  const [debouncedValue] = useDebounce(localVal, 150);
  const isFirstRender = useRef(true);

  const [isLoading, setIsLoading] = useState(false);

  const spinnerStyles = css`
    position: absolute;
    top: 27px;
    right: 0px;
    margin: 0;
    background: white;
    padding: 0px 8px;

    .components-spinner {
      margin: 0;
    }
  `;

  const filterWrapCSS = css`
    position: relative;
  `;

  function onChange(newVal) {
    setLocalVal(newVal);
  }

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    setIsLoading(true);

    dispatch({ type: 'SET_IS_LOADING', payload: true });
    dispatch({ type: 'UPDATE_SETTING', payload: { key: 'pageSize', value: debouncedValue } });
  }, [debouncedValue]);

  useEffect(() => {
    if (isLoading && !state.isLoading) {
      setIsLoading(false);
    }
  }, [state.isLoading]);

  return (
    <div css={filterWrapCSS}>
      {isLoading && (
        <div css={spinnerStyles}>
          <Spinner />
        </div>
      )}

      <RangeControl
        disabled={!state.payloadSettings.pageSize}
        label={wp.i18n.__('Page size', 'wpshopify')}
        value={localVal}
        onChange={onChange}
        min={1}
        max={250}
      />
    </div>
  );
}

export { PageSize };
