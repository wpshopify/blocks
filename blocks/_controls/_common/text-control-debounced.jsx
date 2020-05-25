import { useDebounce } from 'use-debounce'

function TextControlDebounced({ state, dispatch, label, help = false, settingName }) {
  const { useEffect, useState, useRef } = wp.element
  const { TextControl } = wp.components
  const [localVal, setLocalVal] = useState(state.payloadSettings[settingName])
  const [debouncedValue] = useDebounce(localVal, 300)
  const isFirstRender = useRef(true)

  function onChange(newVal) {
    setLocalVal(newVal)
  }

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }
    console.log('TextControlDebounced NOT isFirstRender')
    dispatch({
      type: 'UPDATE_SETTING',
      payload: { key: settingName, value: localVal },
    })
  }, [debouncedValue])

  return <TextControl label={label} value={localVal} help={help} onChange={onChange} />
}

export default TextControlDebounced
