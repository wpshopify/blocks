import { withStore } from '../../../_common'
import { useDebounce } from 'use-debounce'

const { __ } = wp.i18n
const { useEffect, useState, useRef } = wp.element
const { RangeControl } = wp.components

function ItemsPerRow({ state, dispatch }) {
  const [localVal, setLocalVal] = useState(state.payloadSettings.itemsPerRow)
  const [debouncedValue] = useDebounce(localVal, 50)
  const isFirstRender = useRef(true)

  function onChange(newVal) {
    setLocalVal(newVal)
  }

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }

    dispatch({ type: 'UPDATE_SETTING', payload: { key: 'itemsPerRow', value: debouncedValue } })
  }, [debouncedValue])

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }
    setLocalVal(state.payloadSettings.itemsPerRow)
  }, [state.payloadSettings.itemsPerRow])

  return (
    <RangeControl
      label={__('Items per row', 'wpshopify')}
      value={localVal}
      onChange={onChange}
      min={1}
      max={20}
    />
  )
}

export { ItemsPerRow }
