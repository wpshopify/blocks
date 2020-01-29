import { withStore } from '../../../_common'
import { defaultColors } from '../../_common'

const { useState } = wp.element
const { BaseControl, ColorPalette } = wp.components

function AddToCartButtonColor({ state, dispatch }) {
  function onChange(newColor) {
    dispatch({ type: 'UPDATE_SETTING', payload: { key: 'addToCartButtonColor', value: newColor } })
  }

  return (
    <BaseControl label='Add to cart color:'>
      <ColorPalette
        colors={defaultColors()}
        value={state.payloadSettings.addToCartButtonColor}
        onChange={onChange}
      />
    </BaseControl>
  )
}

export { AddToCartButtonColor }
