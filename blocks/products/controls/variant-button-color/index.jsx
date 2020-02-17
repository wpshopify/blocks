import { defaultColors } from '../../_common'

const { __ } = wp.i18n
const { BaseControl, ColorPalette } = wp.components

function VariantButtonColor({ state, dispatch }) {
  function onChange(newColor) {
    dispatch({ type: 'UPDATE_SETTING', payload: { key: 'variantButtonColor', value: newColor } })
  }

  return (
    <BaseControl label={__('Variant button color:', 'wpshopify')} className='color-variants'>
      <ColorPalette
        colors={defaultColors()}
        value={state.payloadSettings.variantButtonColor}
        onChange={onChange}
      />
    </BaseControl>
  )
}

export { VariantButtonColor }
