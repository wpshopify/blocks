import { useDebounce } from 'use-debounce'

const { __ } = wp.i18n
const { useEffect, useState, useRef } = wp.element
const { TextControl } = wp.components

function NoResultsText({ state, dispatch }) {
  const [localVal, setLocalVal] = useState(state.payloadSettings.noResultsText)
  const [debouncedValue] = useDebounce(localVal, 250)
  const isFirstRender = useRef(true)

  function onChange(newVal) {
    setLocalVal(newVal)
  }

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }

    if (localVal !== state.payloadSettings.noResultsText) {
      dispatch({ type: 'UPDATE_SETTING', payload: { key: 'noResultsText', value: localVal } })
    }
  }, [debouncedValue])

  useEffect(() => {
    setLocalVal(state.payloadSettings.noResultsText)
  }, [state.payloadSettings.noResultsText])

  return (
    <TextControl
      label={__('No results text', wpshopify.misc.textdomain)}
      value={localVal}
      onChange={onChange}
    />
  )
}

export { NoResultsText }
