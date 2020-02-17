import { FontSizePickerControl } from '../../_common/font-size-picker-control'

function DescriptionSize({ state, dispatch }) {
  return (
    <FontSizePickerControl
      state={state}
      dispatch={dispatch}
      defaultValue={16}
      settingName='descriptionSize'
    />
  )
}

export { DescriptionSize }
