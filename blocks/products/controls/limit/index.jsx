/** @jsx jsx */
import { jsx, css } from '@emotion/core'

const { useState, useEffect } = wp.element
const { TextControl, Spinner } = wp.components
const { __ } = wp.i18n

function Limit({ state, dispatch }) {
  const [isLoading, setIsLoading] = useState(false)
  const [localVal, setLocalVal] = useState(
    state.payloadSettings.limit ? state.payloadSettings.limit : false
  )

  const spinnerStyles = css`
    position: relative;
    top: -3px;
    right: 6px;
    margin: 0;

    .components-spinner {
      margin: 0;
    }
  `

  function onLimitChange(newVal) {
    dispatch({ type: 'SET_IS_LOADING', payload: true })

    if (!newVal) {
      setLocalVal(false)
      dispatch({ type: 'UPDATE_SETTING', payload: { key: 'limit', value: false } })
      dispatch({ type: 'UPDATE_QUERY_PARAMS', payload: { first: state.payloadSettings.pageSize } })
    } else {
      var newLimitNum = parseInt(newVal)

      if (newLimitNum === state.payloadSettings.pageSize) {
        setIsLoading(false)
      } else {
        setIsLoading(true)
      }

      setLocalVal(newLimitNum)
      dispatch({ type: 'UPDATE_SETTING', payload: { key: 'limit', value: newLimitNum } })
      dispatch({ type: 'UPDATE_QUERY_PARAMS', payload: { first: newLimitNum } })
    }
  }

  useEffect(() => {
    if (isLoading && !state.isLoading) {
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

      <TextControl
        label={__('Limit products to', 'wpshopify')}
        value={localVal}
        onChange={onLimitChange}
        type='number'
        help={__(
          'Sets the number of products shown. This will take precedence over page size.',
          'wpshopify'
        )}
      />
    </>
  )
}

export { Limit }
