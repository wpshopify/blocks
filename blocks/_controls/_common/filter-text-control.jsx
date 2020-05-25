import { convertValuesToString, removeEmptyValues } from './'
import { useDebounce } from 'use-debounce'

/** @jsx jsx */
import { jsx, css } from '@emotion/core'

function FilterTextControl({ state, dispatch, label, help, settingName }) {
  const { useEffect, useState, useRef } = wp.element
  const { TextControl, Spinner } = wp.components
  const [localVal, setLocalVal] = useState(
    convertValuesToString(state.payloadSettings[settingName])
  )
  const [debouncedValue] = useDebounce(localVal, 350)
  const isFirstRender = useRef(true)
  const [isTouched, setIsTouched] = useState(false)

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
  `

  const filterWrapCSS = css`
    position: relative;
  `

  function onChange(newVal) {
    setLocalVal(newVal)
  }

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }

    setIsTouched(true)

    dispatch({
      type: 'UPDATE_SETTING',
      payload: { key: settingName, value: removeEmptyValues(localVal) },
    })
  }, [debouncedValue])

  useEffect(() => {
    if (!state.isLoading) {
      setIsTouched(false)
    }
  }, [state.isLoading])

  return (
    <div css={filterWrapCSS}>
      {state.isLoading && isTouched && (
        <div css={spinnerStyles}>
          <Spinner />
        </div>
      )}

      <TextControl label={label} value={localVal} help={help} onChange={onChange} />
    </div>
  )
}

export { FilterTextControl }
