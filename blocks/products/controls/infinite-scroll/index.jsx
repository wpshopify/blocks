const { ToggleControl } = wp.components
const { useState } = wp.element

function InfiniteScroll({ state, dispatch }) {
  const [val, setVal] = useState(state.payloadSettings.infiniteScroll)

  function onChange(newVal) {
    dispatch({ type: 'UPDATE_SETTING', payload: { key: 'infiniteScroll', value: newVal } })
    setVal(newVal)
  }

  return <ToggleControl label='Infinite scroll?' checked={val} onChange={onChange} />
}

export { InfiniteScroll }
