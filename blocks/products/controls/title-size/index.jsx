import { withStore } from '../../../_common'
import { useDebounce } from 'use-debounce'

const { useEffect, useState, useRef } = wp.element
const { FontSizePicker, BaseControl } = wp.components
const { __ } = wp.i18n

function TitleSize({ state, dispatch }) {
  const [localVal, setLocalVal] = useState(getDefaultVal())
  const [debouncedValue] = useDebounce(localVal, 10)
  const isFirstRender = useRef(true)

  const fontSizes = [
    {
      name: 'Small',
      slug: 'small',
      size: 18
    },
    {
      name: 'Medium',
      slug: 'medium',
      size: 22
    },
    {
      name: 'Big',
      slug: 'big',
      size: 28
    }
  ]

  function getDefaultVal() {
    if (!state.payloadSettings.titleSize) {
      return 22
    }

    var split = state.payloadSettings.titleSize.split('px')

    return parseInt(split[0])
  }

  function onChange(newFontSize) {
    setLocalVal(newFontSize)
  }

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }

    dispatch({
      type: 'UPDATE_SETTING',
      payload: { key: 'titleSize', value: debouncedValue + 'px' }
    })
  }, [debouncedValue])

  useEffect(() => {
    setLocalVal(getDefaultVal())
  }, [state.payloadSettings.titleSize])

  return (
    <BaseControl>
      <FontSizePicker
        fontSizes={fontSizes}
        value={getDefaultVal()}
        fallbackFontSize={22}
        withSlider={true}
        onChange={onChange}
      />
    </BaseControl>
  )
}

export { TitleSize }
