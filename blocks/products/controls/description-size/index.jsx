import { useDebounce } from 'use-debounce'
import { withStore } from '../../../_common'

const { __ } = wp.i18n
const { useEffect, useState, useRef } = wp.element
const { FontSizePicker, BaseControl } = wp.components

function DescriptionSize({ state, dispatch }) {
  const [localVal, setLocalVal] = useState(getDefaultVal())
  const [debouncedValue] = useDebounce(localVal, 10)
  const isFirstRender = useRef(true)

  const fontSizes = [
    {
      name: 'Small',
      slug: 'small',
      size: 16
    },
    {
      name: 'Medium',
      slug: 'medium',
      size: 20
    },
    {
      name: 'Big',
      slug: 'big',
      size: 28
    }
  ]

  function getDefaultVal() {
    if (!state.payloadSettings.descriptionSize) {
      return 16
    }

    var split = state.payloadSettings.descriptionSize.split('px')

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
      key: 'descriptionSize',
      value: debouncedValue + 'px'
    })
  }, [debouncedValue])

  useEffect(() => {
    setLocalVal(getDefaultVal())
  }, [state.payloadSettings.descriptionSize])

  return (
    <BaseControl>
      <FontSizePicker
        fontSizes={fontSizes}
        value={getDefaultVal()}
        fallbackFontSize={16}
        withSlider={true}
        onChange={onChange}
      />
    </BaseControl>
  )
}

export { DescriptionSize }
