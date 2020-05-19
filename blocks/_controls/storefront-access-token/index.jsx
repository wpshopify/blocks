import { useDebounce } from 'use-debounce'

function StorefrontAccessToken({ state, dispatch }) {
  const { useEffect, useState, useRef } = wp.element
  const { TextControl } = wp.components
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
      payload: { key: 'storefrontAccessToken', value: debouncedValue },
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
      placeholder={wp.i18n.__('Enter your Storefront Access Token', 'wpshopify')}
      label={wp.i18n.__('Storefront Access Token', 'wpshopify')}
      value={val}
      onChange={onChange}
      disabled={builderState.hasCustomConnection}
    />
  )
}

export { StorefrontAccessToken }
