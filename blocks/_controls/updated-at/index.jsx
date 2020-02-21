const { __ } = wp.i18n
const { useState } = wp.element
const { TextControl } = wp.components

function UpdatedAt({ state, dispatch }) {
  const [val, setVal] = useState(state.payloadSettings.updatedAt)

  function onChange(newVal) {
    setVal(newVal)
    dispatch({ type: 'UPDATE_SETTING', payload: { key: 'updatedAt', value: newVal } })
  }

  return (
    <TextControl
      label={__('Updated At', 'wpshopify')}
      value={val}
      help={__('Match product updated at', 'wpshopify')}
      onChange={onChange}
    />
  )
}

export { UpdatedAt }
