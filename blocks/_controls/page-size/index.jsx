/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { useBlockDispatch } from '../../_state/hooks';
import { useDebounce } from 'use-debounce';

function PageSize({ pageSize, isLoading }) {
  const { useEffect, useState, useRef } = wp.element;
  const { RangeControl, Spinner } = wp.components;
  const [localVal, setLocalVal] = useState(pageSize);
  const [debouncedValue] = useDebounce(localVal, 150);
  const isFirstRender = useRef(true);
  const dispatch = useBlockDispatch();

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

    dispatch({ type: 'UPDATE_SETTING', payload: { key: 'pageSize', value: debouncedValue } });
  }, [debouncedValue]);

  return (
    <div css={filterWrapCSS}>
      {isLoading && (
        <div css={spinnerStyles}>
          <Spinner />
        </div>
      )}

      <RangeControl
        disabled={!pageSize || isLoading}
        label={wp.i18n.__('Page size', 'wpshopify')}
        value={localVal}
        onChange={onChange}
        min={1}
        max={250}
      />
    </div>
  );
}

export default wp.element.memo(PageSize);
