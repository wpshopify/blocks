function MinQuantity({ state, dispatch }) {
  const { TextControl } = wp.components
  function onChange(newVal) {
    if (!newVal || newVal === 0 || newVal === '0') {
      newVal = 1
    }
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
