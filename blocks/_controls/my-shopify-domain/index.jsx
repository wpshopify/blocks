import { useDebounce } from 'use-debounce'
import { sanitizeDomainField } from '/Users/andrew/www/devil/devilbox-new/data/www/wpshopify-api'

const { useEffect, useState, useRef } = wp.element
const { TextControl } = wp.components
const { __ } = wp.i18n

function MyShopifyDomain({ state, dispatch }) {
  const [val, setVal] = useState(getCachedValue())
  const [debouncedValue] = useDebounce(val, 50)
  const isFirstRender = useRef(true)

  function getCachedValue() {
    //  var creds = JSON.parse(localStorage.getItem('wps-storefront-creds'))

    //  if (!creds) {
    //    return ''
    //  }

    //  return creds.domain
    return ''
  }

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }

    dispatch({
      key: 'myShopifyDomain',
      value: sanitizeDomainField(debouncedValue)
    })
  }, [debouncedValue])

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }

    if (!state.payloadSettings.myShopifyDomain) {
      setVal('')
    } else {
      setVal(state.payloadSettings.myShopifyDomain)
    }
  }, [builderState.hasCustomConnection])

  function onChange(newVal) {
    setVal(newVal)
  }

  return (
    <TextControl
      placeholder='store.myshopify.com'
      label={__('Shopify Domain', 'wpshopify')}
      value={val}
      onChange={onChange}
      disabled={builderState.hasCustomConnection}
    />
  )
}

export { MyShopifyDomain }
