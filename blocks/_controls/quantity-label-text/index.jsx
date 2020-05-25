import TextControlDebounced from '../_common/text-control-debounced'

function QuantityLabelText({ state, dispatch }) {
  return (
    state.payloadSettings.showQuantityLabel && (
      <TextControlDebounced
        settingName='quantityLabelText'
        label={wp.i18n.__('Quantity label text', 'wpshopify')}
        state={state}
        dispatch={dispatch}
      />
    )
  )
}

export { QuantityLabelText }
