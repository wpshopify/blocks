import { useDebounce } from 'use-debounce'

function DescriptionLength({ state, dispatch }) {
  const { useEffect, useState, useRef } = wp.element
  const { RangeControl } = wp.components
  const [localVal, setLocalVal] = useState(state.payloadSettings.descriptionLength)
  const [debouncedValue] = useDebounce(localVal, 10)
  const isFirstRender = useRef(true)

  function onChange(newVal) {
    setLocalVal(newVal)
  }

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }

    dispatch({
      type: 'UPDATE_SETTING',
      payload: { key: 'descriptionLength', value: debouncedValue },
    })
  }, [debouncedValue])

  useEffect(() => {
    setLocalVal(state.payloadSettings.descriptionLength)
  }, [state.payloadSettings.descriptionLength])

  return (
    <RangeControl
      label={wp.i18n.__('Limit Description Length', 'wpshopify')}
      help={wp.i18n.__('Limits the number of characters', 'wpshopify')}
      value={localVal}
      onChange={onChange}
      min={1}
      max={200}
    />
  )
}

export { DescriptionLength }
