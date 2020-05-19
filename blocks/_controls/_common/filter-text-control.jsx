import { convertValuesToString, removeEmptyValues } from './'
import { useDebounce } from 'use-debounce'
import { buildQueryFromSelections } from '/Users/andrew/www/devil/devilbox-new/data/www/wpshopify-api'

/** @jsx jsx */
import { jsx, css } from '@emotion/core'

const { useEffect, useState, useRef } = wp.element
const { TextControl, Spinner } = wp.components

function FilterTextControl({ state, dispatch, label, help, settingName }) {
  const [localVal, setLocalVal] = useState(
    convertValuesToString(state.payloadSettings[settingName])
  )
  const [debouncedValue] = useDebounce(localVal, 250)
  const isFirstRender = useRef(true)
  const [isTouched, setIsTouched] = useState(false)

  const spinnerStyles = css`
    position: absolute;
    top: 78px;
    right: 18px;
    margin: 0;
    background: white;
    padding: 0px 8px;

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

    setIsTouched(true)

    dispatch({
      type: 'UPDATE_SETTING',
      payload: { key: settingName, value: removeEmptyValues(localVal) },
    })

    dispatch({
      type: 'UPDATE_QUERY_PARAMS',
      payload: { query: buildQueryFromSelections(state.payloadSettings) },
    })
  }, [debouncedValue])

  useEffect(() => {
    if (!state.isLoading) {
      setIsTouched(false)
    }
  }, [state.isLoading])

  return (
    <>
      {state.isLoading && isTouched && (
        <div css={spinnerStyles}>
          <Spinner />
        </div>
      )}

      <TextControl label={label} value={localVal} help={help} onChange={onChange} />
    </>
  )
}

export { FilterTextControl }
