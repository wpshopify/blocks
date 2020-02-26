import { useDebounce } from 'use-debounce'

const { useEffect, useState, useRef } = wp.element
const { FontSizePicker, BaseControl } = wp.components
const { __ } = wp.i18n

function FontSizePickerControl({ state, dispatch, defaultValue, label, settingName }) {
  const [localVal, setLocalVal] = useState(getVal())
  const [debouncedValue] = useDebounce(localVal, 10)
  const isFirstRender = useRef(true)

  const fontSizes = [
    {
      name: __('Small', wpshopify.misc.textdomain),
      slug: 'small',
      size: 18
    },
    {
      name: __('Medium', wpshopify.misc.textdomain),
      slug: 'medium',
      size: 22
    },
    {
      name: __('Big', wpshopify.misc.textdomain),
      slug: 'big',
      size: 28
    }
  ]

  function getSizeIntFromString(value) {
    return parseInt(value.split('px')[0])
  }

  function getVal(maybeSize) {
    if (!maybeSize) {
      return defaultValue
    }

    return getSizeIntFromString(maybeSize)
  }

  function onChange(newFontSize) {
    setLocalVal(newFontSize)
  }

  function convertToString(value) {
    return value + 'px'
  }

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }

    if (!debouncedValue) {
      var newVal = defaultValue
    } else {
      var newVal = debouncedValue
    }

    dispatch({
      type: 'UPDATE_SETTING',
      payload: { key: settingName, value: convertToString(newVal) }
    })
  }, [debouncedValue])

  return (
    <BaseControl>
      <FontSizePicker
        fontSizes={fontSizes}
        value={getVal(state.payloadSettings[settingName])}
        fallbackFontSize={defaultValue}
        withSlider={true}
        onChange={onChange}
      />
    </BaseControl>
  )
}

export { FontSizePickerControl }
