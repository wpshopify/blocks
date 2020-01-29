import { withStore } from '../../../_common'
import { defaultColors } from '../../_common'

const { BaseControl, ColorPalette } = wp.components

function TitleColor({ state, dispatch }) {
  function onChange(newColor) {
    dispatch({ type: 'UPDATE_SETTING', payload: { key: 'titleColor', value: newColor } })
  }

  return (
    <BaseControl label='Title Color:'>
      <ColorPalette
        colors={defaultColors()}
        value={state.payloadSettings.titleColor}
        onChange={onChange}
      />
    </BaseControl>
  )
}

export { TitleColor }
