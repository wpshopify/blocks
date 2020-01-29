const { useState, useEffect } = wp.element
const { TextControl, ToggleControl } = wp.components
import { withStore } from '../../../_common'

function Limit({ state, dispatch }) {
  const [limitToggle, setLimitToggle] = useState(false)
  const [localVal, setLocalVal] = useState(
    state.payloadSettings.limit ? state.payloadSettings.limit : false
  )

  function onChange() {
    setLimitToggle(!limitToggle)
  }

  function onLimitChange(newVal) {
    setLocalVal(newVal)

    dispatch({ type: 'UPDATE_SETTING', payload: { key: 'limit', value: parseInt(newVal) } })
  }

  useEffect(() => {
    setLocalVal(state.payloadSettings.limit)

    if (!state.payloadSettings.limit) {
      setLimitToggle(false)
    }
  }, [state.payloadSettings.limit])

  return (
    <>
      <ToggleControl label='Limit?' checked={limitToggle} onChange={onChange} />
      {limitToggle && (
        <TextControl
          label='Limit'
          value={localVal}
          onChange={onLimitChange}
          type='number'
          help='Limits the overall output'
        />
      )}
    </>
  )
}

export { Limit }
