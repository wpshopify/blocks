// import React, { useContext, useState, useEffect, useRef } from 'react'
// import { TextControl } from '@wordpress/components'
import { withStore } from '../../../_common'
import { useDebounce } from 'use-debounce'

const { useEffect, useState, useRef } = wp.element
const { TextControl } = wp.components

function StorefrontAccessToken({ state, dispatch }) {
  const [val, setVal] = useState(getCachedValue())
  const [debouncedValue] = useDebounce(val, 250)
  const isFirstRender = useRef(true)

  function getCachedValue() {
    //  var creds = JSON.parse(localStorage.getItem('wps-storefront-creds'))

    //  if (!creds) {
    //    return ''
    //  }

    //  return creds.storefrontAccessToken

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
      placeholder='Enter your Storefront Access Token'
      label='Storefront Access Token'
      value={val}
      onChange={onChange}
      disabled={builderState.hasCustomConnection}
    />
  )
}

export { StorefrontAccessToken }
