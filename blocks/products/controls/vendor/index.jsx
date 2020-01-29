import { withStore } from '../../../_common'
import { convertValuesToString, removeEmptyValues } from '../../_common'
import { useDebounce } from 'use-debounce'

const { useEffect, useState, useRef } = wp.element
const { TextControl } = wp.components

function Vendor({ state, dispatch }) {
  const [localVal, setLocalVal] = useState(savedVal())
  const [debouncedValue] = useDebounce(localVal, 400)
  const isFirstRender = useRef(true)

  function savedVal() {
    return convertValuesToString(state.payloadSettings.vendor)
  }

  function onChange(newVal) {
    setLocalVal(newVal)
  }

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }

    if (localVal !== savedVal()) {
      dispatch({
        type: 'UPDATE_SETTING',
        payload: { key: 'vendor', value: removeEmptyValues(localVal) }
      })
    }
  }, [debouncedValue])

  useEffect(() => {
    setLocalVal(savedVal())
  }, [state.payloadSettings.vendor])

  return (
    <TextControl
      label='Vendor'
      value={localVal}
      help='Match product vendors. Separate multiple by comma.'
      onChange={onChange}
    />
  )
}

export { Vendor }
