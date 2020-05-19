function MinQuantity({ state, dispatch }) {
  const { TextControl } = wp.components
  function onChange(newVal) {
    dispatch({ type: 'UPDATE_SETTING', payload: { key: 'minQuantity', value: newVal } })
  }

  return (
    <TextControl
      type='Number'
      label={wp.i18n.__('Min quantity', 'wpshopify')}
      value={state.payloadSettings.minQuantity}
      onChange={onChange}
    />
  )
}

export { MinQuantity }
