function Limit({ state, dispatch }) {
  const { useState } = wp.element
  const { TextControl } = wp.components
  const [isLoading, setIsLoading] = useState(false)
  const [localVal, setLocalVal] = useState(
    state.payloadSettings.limit ? state.payloadSettings.limit : false
  )

  function onLimitChange(newVal) {
    dispatch({ type: 'SET_IS_LOADING', payload: true })

    if (!newVal) {
      setLocalVal(false)
      dispatch({ type: 'UPDATE_SETTING', payload: { key: 'limit', value: false } })
    } else {
      var newLimitNum = parseInt(newVal)

      if (newLimitNum === state.payloadSettings.pageSize) {
        setIsLoading(false)
      } else {
        setIsLoading(true)
      }

      setLocalVal(newLimitNum)
      dispatch({ type: 'UPDATE_SETTING', payload: { key: 'limit', value: newLimitNum } })
    }
  }

  return (
    <TextControl
      label={wp.i18n.__('Limit products?', 'wpshopify')}
      help={wp.i18n.__(
        'Sets the number of products shown. This will take precedence over the page size setting.',
        'wpshopify'
      )}
      value={localVal}
      onChange={onLimitChange}
      type='number'
    />
  )
}

export { Limit }
