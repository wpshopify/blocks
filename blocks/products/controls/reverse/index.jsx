/** @jsx jsx */
import { jsx, css } from '@emotion/core'

const { CheckboxControl, Spinner } = wp.components
const { __ } = wp.i18n
const { useState, useEffect } = wp.element

function Reverse({ state, dispatch }) {
  const [isLoading, setIsLoading] = useState(false)

  const spinnerStyles = css`
    position: relative;
    top: 2px;
    right: 0;
    margin: 0;

    .components-spinner {
      margin: 0;
    }
  `

  function onChange(newVal) {
    setIsLoading(true)
    dispatch({ type: 'UPDATE_SETTING', payload: { key: 'reverse', value: newVal } })
    dispatch({ type: 'SET_IS_LOADING', payload: true })
    dispatch({ type: 'UPDATE_QUERY_PARAMS', payload: { reverse: newVal } })
  }

  useEffect(() => {
    if (!state.isLoading) {
      setIsLoading(false)
    }
  }, [state.isLoading])

  return (
    <>
      {isLoading && (
        <div css={spinnerStyles}>
          <Spinner />
        </div>
      )}
      <CheckboxControl
        label={__('Reverse order?', 'wpshopify')}
        checked={state.payloadSettings.reverse}
        onChange={onChange}
      />
    </>
  )
}

export { Reverse }
