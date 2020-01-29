import { withStore } from '../../../_common'
import { convertValuesToString, removeEmptyValues } from '../../_common'
import { useDebounce } from 'use-debounce'

const { useEffect, useState, useRef } = wp.element
const { TextControl } = wp.components

function ProductType({ state, dispatch }) {
  const [localVal, setLocalVal] = useState(savedVal())
  const [debouncedValue] = useDebounce(localVal, 400)
  const isFirstRender = useRef(true)

  function savedVal() {
    return convertValuesToString(state.payloadSettings.productType)
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
        payload: { key: 'productType', value: removeEmptyValues(localVal) }
      })
    }
  }, [debouncedValue])

  useEffect(() => {
    setLocalVal(savedVal())
  }, [state.payloadSettings.productType])

  return (
    <TextControl
      label='Product Type'
      value={localVal}
      help='Match product types. Separate multiple by comma.'
      onChange={onChange}
    />
  )
}

export { ProductType }
