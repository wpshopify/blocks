/** @jsx jsx */
import { jsx, css } from '@emotion/core'

function Reverse({ state, dispatch }) {
  const { CheckboxControl, Spinner } = wp.components
  const { useState, useEffect } = wp.element
  const [isLoading, setIsLoading] = useState(false)

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
  `

  const filterWrapCSS = css`
    position: relative;
  `

  function onChange(newVal) {
    setIsLoading(true)
    dispatch({ type: 'SET_IS_LOADING', payload: true })
    dispatch({ type: 'UPDATE_SETTING', payload: { key: 'reverse', value: newVal } })
  }

  useEffect(() => {
    if (!state.isLoading) {
      setIsLoading(false)
    }
  }, [state.isLoading])

  return (
    <div css={filterWrapCSS}>
      {isLoading && (
        <div css={spinnerStyles}>
          <Spinner />
        </div>
      )}
      <CheckboxControl
        label={wp.i18n.__('Reverse order?', 'wpshopify')}
        checked={state.payloadSettings.reverse}
        onChange={onChange}
      />
    </div>
  )
}

export { Reverse }
