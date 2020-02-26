const { TextControl } = wp.components
const { __ } = wp.i18n

function MinQuantity({ state, dispatch }) {
  function onChange(newVal) {
    dispatch({ type: 'UPDATE_SETTING', payload: { key: 'minQuantity', value: newVal } })
  }

  return (
    <TextControl
      type='Number'
      label={__('Min quantity', wpshopify.misc.textdomain)}
      value={state.payloadSettings.minQuantity}
      onChange={onChange}
    />
  )
}

export { MinQuantity }
