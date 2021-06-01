/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { convertValuesToString, removeEmptyValues } from './';
import { useDebounce } from 'use-debounce';
import { useBlockDispatch } from '../../_state/hooks';

function FilterTextControl({ state, label, help, settingName, isLoading }) {
  const { useEffect, useState, useRef } = wp.element;
  const { TextControl, Spinner } = wp.components;
  const [localVal, setLocalVal] = useState(convertValuesToString(state));
  const [debouncedValue] = useDebounce(localVal, 150);
  const isFirstRender = useRef(true);
  const [isTouched, setIsTouched] = useState(false);
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

    setIsTouched(true);

    dispatch({
      type: 'UPDATE_SETTING',
      payload: { key: settingName, value: removeEmptyValues(localVal) },
    });
  }, [debouncedValue]);

  useEffect(() => {
    if (!isLoading) {
      setIsTouched(false);
    }
  }, [isLoading]);

  return (
    <div css={filterWrapCSS}>
      {isLoading && isTouched && (
        <div css={spinnerStyles}>
          <Spinner />
        </div>
      )}

      <TextControl label={label} value={localVal} help={help} onChange={onChange} />
    </div>
  );
}

export default wp.element.memo(FilterTextControl);
