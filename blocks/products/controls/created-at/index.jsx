const { useState } = wp.element
const { TextControl } = wp.components
const { __ } = wp.i18n

function CreatedAt({ state, dispatch }) {
  const [val, setVal] = useState(state.payloadSettings.createdAt)

  function onChange(newVal) {
    setVal(newVal)
    dispatch({ type: 'UPDATE_SETTING', payload: { key: 'createdAt', value: newVal } })
  }

  return (
    <TextControl
      label={__('Created At', 'wpshopify')}
      value={val}
      help={__('Match product created at', 'wpshopify')}
      onChange={onChange}
    />
  )
}

export { CreatedAt }
