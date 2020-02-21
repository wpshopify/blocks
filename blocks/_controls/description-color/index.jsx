import { defaultColors } from '../_common'
const { BaseControl, ColorPalette } = wp.components
const { __ } = wp.i18n

function DescriptionColor({ state, dispatch }) {
  function onChange(newColor) {
    dispatch({ type: 'UPDATE_SETTING', payload: { key: 'descriptionColor', value: newColor } })
  }

  return (
    <BaseControl label={__('Description Color:', 'wpshopify')}>
      <ColorPalette
        colors={defaultColors()}
        value={state.payloadSettings.descriptionColor}
        onChange={onChange}
      />
    </BaseControl>
  )
}

export { DescriptionColor }
