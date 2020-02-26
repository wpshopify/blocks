const { useState } = wp.element
const { TextControl } = wp.components
const { __ } = wp.i18n

function Limit({ state, dispatch }) {
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
      label={__('Limit products to', wpshopify.misc.textdomain)}
      value={localVal}
      onChange={onLimitChange}
      type='number'
      help={__(
        'Sets the number of products shown. This will take precedence over page size.',
        wpshopify.misc.textdomain
      )}
    />
  )
}

export { Limit }
