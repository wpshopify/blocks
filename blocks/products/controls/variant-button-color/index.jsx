import { withStore } from '../../../_common'
import { defaultColors } from '../../_common'

const { BaseControl, ColorPalette } = wp.components

function VariantButtonColor({ state, dispatch }) {
  function onChange(newColor) {
    dispatch({ type: 'UPDATE_SETTING', payload: { key: 'variantButtonColor', value: newColor } })
  }

  return (
    <BaseControl label='Variant button color:' className='color-variants'>
      <ColorPalette
        colors={defaultColors()}
        value={state.payloadSettings.variantButtonColor}
        onChange={onChange}
      />
    </BaseControl>
  )
}

export { VariantButtonColor }
