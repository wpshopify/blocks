import { withStore } from '../../../_common'
const { useEffect, useState } = wp.element
const { Button } = wp.components

function UpdateCredentialsButton({ state, dispatch }) {
  const [hasCredentials, setHasCredentials] = useState(hasValidCreds())

  function hasCachedCredentials() {
    //  var existingCreds = localStorage.getItem('wps-storefront-creds')

    //  if (existingCreds) {
    //    return true
    //  }

    return false
  }

  function hasValidCreds() {
    if (hasCachedCredentials()) {
      return true
    }

    if (!state.payloadSettings.myShopifyDomain || !state.payloadSettings.storefrontAccessToken) {
      return false
    }

    return true
  }

  useEffect(() => {
    setHasCredentials(hasValidCreds())
  }, [builderState.hasCustomConnection])

  function onClick() {
    if (hasCredentials) {
      // localStorage.removeItem('wps-storefront-creds')
      // builderDispatch({
      //   type: 'UPDATE_SETTING',
      //   payload: { key: 'myShopifyDomain', value: false }
      // })
      // builderDispatch({
      //   type: 'UPDATE_SETTING',
      //   payload: { key: 'storefrontAccessToken', value: false }
      // })
      // builderDispatch({ type: 'SET_CUSTOM_CONNECTION', payload: false })

      dispatch({ type: 'UPDATE_SETTING', payload: { key: 'myShopifyDomain', value: false } })
      dispatch({ type: 'UPDATE_SETTING', payload: { key: 'storefrontAccessToken', value: false } })
      dispatch({ type: 'SET_CUSTOM_CONNECTION', payload: false })

      setHasCredentials(false)
    } else {
      var newCreds = {
        domain: state.payloadSettings.myShopifyDomain,
        storefrontAccessToken: state.payloadSettings.storefrontAccessToken
      }

      dispatch({ type: 'SET_CUSTOM_CONNECTION', payload: true })

      setHasCredentials(true)
    }
  }

  return (
    <Button isDefault onClick={onClick} disabled={!hasValidCreds()}>
      {hasCredentials ? 'Remove connected Shopify store' : 'Load Shopify store'}
    </Button>
  )
}

export { UpdateCredentialsButton }
