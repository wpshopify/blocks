import { defaultColors } from '../_common'

function DescriptionColor({ state, dispatch }) {
  const { BaseControl, ColorPalette } = wp.components

  function onChange(newColor) {
    dispatch({ type: 'UPDATE_SETTING', payload: { key: 'descriptionColor', value: newColor } })
  }

  return (
    <BaseControl label={wp.i18n.__('Description Color:', 'wpshopify')}>
      <ColorPalette
        colors={defaultColors()}
        value={state.payloadSettings.descriptionColor}
        onChange={onChange}
      />
    </BaseControl>
  )
}

export { DescriptionColor }
