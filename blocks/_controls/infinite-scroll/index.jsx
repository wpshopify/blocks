function InfiniteScroll({ state, dispatch }) {
  const { ToggleControl } = wp.components
  const { useState } = wp.element
  const [val, setVal] = useState(state.payloadSettings.infiniteScroll)

  function onChange(newVal) {
    dispatch({ type: 'UPDATE_SETTING', payload: { key: 'infiniteScroll', value: newVal } })
    setVal(newVal)
  }

  return (
    <ToggleControl
      label={wp.i18n.__('Infinite scroll?', 'wpshopify')}
      checked={val}
      onChange={onChange}
    />
  )
}

export { InfiniteScroll }
