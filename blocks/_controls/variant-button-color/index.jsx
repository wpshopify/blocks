import { defaultColors } from '../_common'

function VariantButtonColor({ state, dispatch }) {
  const { BaseControl, ColorPalette } = wp.components
  function onChange(newColor) {
    dispatch({ type: 'UPDATE_SETTING', payload: { key: 'variantButtonColor', value: newColor } })
  }

  return (
    state.payloadSettings.variantStyle === 'dropdown' && (
      <BaseControl
        label={wp.i18n.__('Variant button color:', 'wpshopify')}
        className='color-variants'>
        <ColorPalette
          colors={defaultColors()}
          value={state.payloadSettings.variantButtonColor}
          onChange={onChange}
        />
      </BaseControl>
    )
  )
}

export { VariantButtonColor }
