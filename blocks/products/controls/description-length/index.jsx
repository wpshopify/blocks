import { withStore } from '../../../_common'
import { useDebounce } from 'use-debounce'

const { useEffect, useState, useRef } = wp.element
const { RangeControl } = wp.components

function DescriptionLength({ state, dispatch }) {
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
      payload: { key: 'descriptionLength', value: debouncedValue }
    })
  }, [debouncedValue])

  useEffect(() => {
    setLocalVal(state.payloadSettings.descriptionLength)
  }, [state.payloadSettings.descriptionLength])

  return (
    <RangeControl
      label='Description Length'
      help=' Limits the number of characters'
      value={localVal}
      onChange={onChange}
      min={1}
      max={200}
    />
  )
}

export { DescriptionLength }
