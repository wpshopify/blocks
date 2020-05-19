import { defaultColors } from '../_common'

const { BaseControl, ColorPalette } = wp.components

function AddToCartButtonColor({ state, dispatch }) {
  function onChange(newColor) {
    dispatch({ type: 'UPDATE_SETTING', payload: { key: 'addToCartButtonColor', value: newColor } })
  }

  return (
    <BaseControl label={wp.i18n.__('Add to cart color:', 'wpshopify')}>
      <ColorPalette
        colors={defaultColors()}
        value={state.payloadSettings.addToCartButtonColor}
        onChange={onChange}
      />
    </BaseControl>
  )
}

export { AddToCartButtonColor }
