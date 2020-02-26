import { defaultColors } from '../_common'

const { BaseControl, ColorPalette } = wp.components
const { __ } = wp.i18n

function AddToCartButtonColor({ state, dispatch }) {
  function onChange(newColor) {
    dispatch({ type: 'UPDATE_SETTING', payload: { key: 'addToCartButtonColor', value: newColor } })
  }

  return (
    <BaseControl label={__('Add to cart color:', wpshopify.misc.textdomain)}>
      <ColorPalette
        colors={defaultColors()}
        value={state.payloadSettings.addToCartButtonColor}
        onChange={onChange}
      />
    </BaseControl>
  )
}

export { AddToCartButtonColor }
