import { defaultColors } from '../_common'

function TitleColor({ state, dispatch }) {
  const { BaseControl, ColorPalette } = wp.components

  function onChange(newColor) {
    dispatch({ type: 'UPDATE_SETTING', payload: { key: 'titleColor', value: newColor } })
  }

  return (
    <BaseControl label={wp.i18n.__('Title Color:', 'wpshopify')}>
      <ColorPalette
        colors={defaultColors()}
        value={state.payloadSettings.titleColor}
        onChange={onChange}
      />
    </BaseControl>
  )
}

export { TitleColor }
