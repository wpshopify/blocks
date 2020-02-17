const { useState, useEffect } = wp.element
const { TextControl, ToggleControl } = wp.components
const { __ } = wp.i18n

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
      <ToggleControl label={__('Limit?', 'wpshopify')} checked={limitToggle} onChange={onChange} />
      {limitToggle && (
        <TextControl
          label={__('Limit', 'wpshopify')}
          value={localVal}
          onChange={onLimitChange}
          type='number'
          help={__('Limits the overall output', 'wpshopify')}
        />
      )}
    </>
  )
}

export { Limit }
