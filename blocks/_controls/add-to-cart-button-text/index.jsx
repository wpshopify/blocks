import TextControlDebounced from '../_common/text-control-debounced'

function AddToCartButtonText({ state, dispatch }) {
  return (
    <TextControlDebounced
      settingName='addToCartButtonText'
      label={wp.i18n.__('Add to cart button text', 'wpshopify')}
      state={state}
      dispatch={dispatch}
    />
  )
}

export { AddToCartButtonText }
