import { withStore } from '../../../_common'
import { defaultColors } from '../../_common'
const { BaseControl, ColorPalette } = wp.components

function DescriptionColor({ state, dispatch }) {
  function onChange(newColor) {
    dispatch({ type: 'UPDATE_SETTING', payload: { key: 'descriptionColor', value: newColor } })
  }

  return (
    <BaseControl label='Description Color:'>
      <ColorPalette
        colors={defaultColors()}
        value={state.payloadSettings.descriptionColor}
        onChange={onChange}
      />
    </BaseControl>
  )
}

export { DescriptionColor }
