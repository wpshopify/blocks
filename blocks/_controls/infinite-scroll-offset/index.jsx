const { useEffect, useState } = wp.element
const { TextControl } = wp.components
const { __ } = wp.i18n

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
      label={__('Infinite Scroll Offset', wpshopify.misc.textdomain)}
      value={localVal}
      onChange={onChange}
      type='number'
      help={__('Determines when infinite scroll begins', wpshopify.misc.textdomain)}
    />
  )
}

export { InfiniteScrollOffset }
