const { ToggleControl } = wp.components
const { useState } = wp.element
const { __ } = wp.i18n

function InfiniteScroll({ state, dispatch }) {
  const [val, setVal] = useState(state.payloadSettings.infiniteScroll)

  function onChange(newVal) {
    dispatch({ type: 'UPDATE_SETTING', payload: { key: 'infiniteScroll', value: newVal } })
    setVal(newVal)
  }

  return (
    <ToggleControl
      label={__('Infinite scroll?', wpshopify.misc.textdomain)}
      checked={val}
      onChange={onChange}
    />
  )
}

export { InfiniteScroll }
