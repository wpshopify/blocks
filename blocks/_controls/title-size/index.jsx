import { FontSizePickerControl } from '../_common/font-size-picker-control'

function TitleSize({ state, dispatch }) {
  return (
    <FontSizePickerControl
      state={state}
      dispatch={dispatch}
      defaultValue={22}
      settingName='titleSize'
    />
  )
}

export { TitleSize }
