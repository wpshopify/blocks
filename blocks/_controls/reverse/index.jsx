/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { useBlockDispatch } from '../../_state/hooks';

function Reverse({ reverse, isLoading }) {
  const { CheckboxControl, Spinner } = wp.components;

  const dispatch = useBlockDispatch();

  const spinnerStyles = css`
    position: absolute;
    top: 3px;
    right: -5px;
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
    dispatch({ type: 'SET_IS_LOADING', payload: true });
    dispatch({ type: 'UPDATE_SETTING', payload: { key: 'reverse', value: newVal } });
  }

  return (
    <div css={filterWrapCSS}>
      {isLoading && (
        <div css={spinnerStyles}>
          <Spinner />
        </div>
      )}
      <CheckboxControl
        label={wp.i18n.__('Reverse order?', 'wpshopify')}
        checked={reverse}
        onChange={onChange}
      />
    </div>
  );
}

export default wp.element.memo(Reverse);
