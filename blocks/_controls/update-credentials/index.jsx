const { useEffect, useState } = wp.element;
const { Button } = wp.components;

function UpdateCredentialsButton({ state, dispatch }) {
  const [hasCredentials, setHasCredentials] = useState(hasValidCreds());

  function hasCachedCredentials() {
    return false;
  }

  function hasValidCreds() {
    if (hasCachedCredentials()) {
      return true;
    }

    if (!state.payloadSettings.myShopifyDomain || !state.payloadSettings.storefrontAccessToken) {
      return false;
    }

    return true;
  }

  useEffect(() => {
    setHasCredentials(hasValidCreds());
  }, [state.hasCustomConnection]);

  function onClick() {
    if (hasCredentials) {
      dispatch({ type: 'UPDATE_SETTING', payload: { key: 'myShopifyDomain', value: false } });
      dispatch({ type: 'UPDATE_SETTING', payload: { key: 'storefrontAccessToken', value: false } });
      dispatch({ type: 'SET_CUSTOM_CONNECTION', payload: false });

      setHasCredentials(false);
    } else {
      var newCreds = {
        domain: state.payloadSettings.myShopifyDomain,
        storefrontAccessToken: state.payloadSettings.storefrontAccessToken,
      };

      dispatch({ type: 'SET_CUSTOM_CONNECTION', payload: true });

      setHasCredentials(true);
    }
  }

  return (
    <Button onClick={onClick} disabled={!hasValidCreds()}>
      {hasCredentials ? 'Remove connected Shopify store' : 'Load Shopify store'}
    </Button>
  );
}

export default wp.element.memo(UpdateCredentialsButton);
