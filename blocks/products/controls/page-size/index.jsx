import { useDebounce } from 'use-debounce'
const { useEffect, useState, useRef, useContext } = wp.element
const { RangeControl } = wp.components

function PageSize({ state, dispatch }) {
  const [localVal, setLocalVal] = useState(state.payloadSettings.pageSize)
  const [debouncedValue] = useDebounce(localVal, 150)
  const isFirstRender = useRef(true)

  function onChange(newVal) {
    setLocalVal(newVal)
  }

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }

    dispatch({ type: 'UPDATE_SETTING', payload: { key: 'pageSize', value: debouncedValue } })
  }, [debouncedValue])

  return (
    <RangeControl
      disabled={!state.payloadSettings.pageSize}
      label='Page size'
      value={localVal}
      onChange={onChange}
      min={1}
      max={250}
    />
  )
}

export { PageSize }
