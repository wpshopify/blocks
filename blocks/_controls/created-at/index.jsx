function CreatedAt({ state, dispatch }) {
  const { useState } = wp.element
  const { TextControl } = wp.components
  const [val, setVal] = useState(state.payloadSettings.createdAt)

  function onChange(newVal) {
    setVal(newVal)
    dispatch({ type: 'UPDATE_SETTING', payload: { key: 'createdAt', value: newVal } })
  }

  return (
    <TextControl
      value={val}
      label={wp.i18n.__('Created At', 'wpshopify')}
      help={wp.i18n.__('Match product created at', 'wpshopify')}
      onChange={onChange}
    />
  )
}

export { CreatedAt }
