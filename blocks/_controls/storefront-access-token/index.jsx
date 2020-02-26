import { useDebounce } from 'use-debounce'

const { __ } = wp.i18n
const { useEffect, useState, useRef } = wp.element
const { TextControl } = wp.components

function StorefrontAccessToken({ state, dispatch }) {
  const [val, setVal] = useState(getCachedValue())
  const [debouncedValue] = useDebounce(val, 250)
  const isFirstRender = useRef(true)

  function getCachedValue() {
    return ''
  }

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }

    dispatch({
      type: 'UPDATE_SETTING',
      payload: { key: 'storefrontAccessToken', value: debouncedValue }
    })
  }, [debouncedValue])

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }

    if (!state.payloadSettings.storefrontAccessToken) {
      setVal('')
    } else {
      setVal(state.payloadSettings.storefrontAccessToken)
    }
  }, [builderState.hasCustomConnection])

  function onChange(newVal) {
    setVal(newVal)
  }

  return (
    <TextControl
      placeholder={__('Enter your Storefront Access Token', wpshopify.misc.textdomain)}
      label={__('Storefront Access Token', wpshopify.misc.textdomain)}
      value={val}
      onChange={onChange}
      disabled={builderState.hasCustomConnection}
    />
  )
}

export { StorefrontAccessToken }
