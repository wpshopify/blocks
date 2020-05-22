import { useDebounce } from 'use-debounce'

function ItemsPerRow({ state, dispatch }) {
  const { useEffect, useState, useRef } = wp.element
  const { RangeControl } = wp.components
  const [localVal, setLocalVal] = useState(state.payloadSettings.itemsPerRow)
  const [debouncedValue] = useDebounce(localVal, 100)
  const isFirstRender = useRef(true)

  function onChange(newVal) {
    console.log('onChange', newVal)

    setLocalVal(newVal)
  }

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }

    dispatch({ type: 'UPDATE_SETTING', payload: { key: 'itemsPerRow', value: debouncedValue } })
  }, [debouncedValue])

  //   useEffect(() => {
  //     if (isFirstRender.current) {
  //       isFirstRender.current = false
  //       return
  //     }
  //     setLocalVal(state.payloadSettings.itemsPerRow)
  //   }, [state.payloadSettings.itemsPerRow])

  return (
    <RangeControl
      label={wp.i18n.__('Items per row', 'wpshopify')}
      value={localVal}
      onChange={onChange}
      min={1}
      max={20}
    />
  )
}

export { ItemsPerRow }
