import { withStore } from '../../../_common'
const { useEffect, useState } = wp.element
const { TextControl } = wp.components

function InfiniteScrollOffset({ state, dispatch }) {
  const [localVal, setLocalVal] = useState(state.payloadSettings.infiniteScrollOffset)

  function onChange(newVal) {
    setLocalVal(newVal)
    dispatch({ type: 'UPDATE_SETTING', payload: { key: 'infiniteScrollOffset', value: newVal } })
  }

  useEffect(() => {
    setLocalVal(state.payloadSettings.infiniteScrollOffset)
  }, [state.payloadSettings.infiniteScrollOffset])

  return (
    <TextControl
      label='Infinite Scroll Offset'
      value={localVal}
      onChange={onChange}
      type='number'
      help='Determines when infinite scroll begins'
    />
  )
}

export { InfiniteScrollOffset }
