import { useDebounce } from 'use-debounce'

const { useEffect, useState, useRef } = wp.element
const { FontSizePicker, BaseControl } = wp.components

function FontSizePickerControl({ state, dispatch, defaultValue, label, settingName }) {
  const [localVal, setLocalVal] = useState(getVal())
  const [debouncedValue] = useDebounce(localVal, 10)
  const isFirstRender = useRef(true)

  const fontSizes = [
    {
      name: wp.i18n.__('Small', 'wpshopify'),
      slug: 'small',
      size: 18,
    },
    {
      name: wp.i18n.__('Medium', 'wpshopify'),
      slug: 'medium',
      size: 22,
    },
    {
      name: wp.i18n.__('Big', 'wpshopify'),
      slug: 'big',
      size: 28,
    },
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
      payload: { key: settingName, value: convertToString(newVal) },
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
