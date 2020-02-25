import { useDebounce } from 'use-debounce'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'

const { useEffect, useState, useRef, useContext } = wp.element
const { RangeControl, Spinner } = wp.components
const { __ } = wp.i18n

function PageSize({ state, dispatch }) {
  const [localVal, setLocalVal] = useState(state.payloadSettings.pageSize)
  const [debouncedValue] = useDebounce(localVal, 150)
  const isFirstRender = useRef(true)

  const [isLoading, setIsLoading] = useState(false)

  const spinnerStyles = css`
    position: relative;
    top: -3px;
    right: 6px;
    margin: 0;

    .components-spinner {
      margin: 0;
    }
  `

  function onChange(newVal) {
    setLocalVal(newVal)
  }

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }
    setIsLoading(true)

    dispatch({ type: 'UPDATE_SETTING', payload: { key: 'pageSize', value: debouncedValue } })
    dispatch({ type: 'UPDATE_QUERY_PARAMS', payload: { first: debouncedValue } })
    dispatch({ type: 'SET_IS_LOADING', payload: true })
  }, [debouncedValue])

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

      <RangeControl
        disabled={!state.payloadSettings.pageSize}
        label={__('Page size', 'wpshopify')}
        value={localVal}
        onChange={onChange}
        min={1}
        max={250}
      />
    </>
  )
}

export { PageSize }
