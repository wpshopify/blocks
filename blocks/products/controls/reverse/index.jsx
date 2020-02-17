const { CheckboxControl } = wp.components
const { __ } = wp.i18n

function Reverse({ state, dispatch }) {
  function onChange(newVal) {
    dispatch({ type: 'UPDATE_SETTING', payload: { key: 'reverse', value: newVal } })
    dispatch({ type: 'SET_IS_LOADING', payload: true })
    dispatch({ type: 'UPDATE_QUERY_PARAMS', payload: { reverse: newVal } })
  }

  return (
    <CheckboxControl
      label={__('Reverse order?', 'wpshopify')}
      checked={state.payloadSettings.reverse}
      onChange={onChange}
    />
  )
}

export { Reverse }
