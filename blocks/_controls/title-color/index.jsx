import { defaultColors } from '../_common'

const { BaseControl, ColorPalette } = wp.components
const { __ } = wp.i18n

function TitleColor({ state, dispatch }) {
  function onChange(newColor) {
    dispatch({ type: 'UPDATE_SETTING', payload: { key: 'titleColor', value: newColor } })
  }

  return (
    <BaseControl label={__('Title Color:', 'wpshopify')}>
      <ColorPalette
        colors={defaultColors()}
        value={state.payloadSettings.titleColor}
        onChange={onChange}
      />
    </BaseControl>
  )
}

export { TitleColor }
