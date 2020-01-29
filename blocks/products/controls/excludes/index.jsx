import without from 'lodash/without'
import { withStore } from '../../../_common'

const { useEffect, useState } = wp.element
const { CheckboxControl, BaseControl } = wp.components

function Excludes({ state, dispatch }) {
  const [excludesState, setExcludesState] = useState(state.payloadSettings.excludes)

  function inState(excludesState, type) {
    if (excludesState.includes(type)) {
      return true
    } else {
      return false
    }
  }

  function onChange(isChecked, type) {
    if (isChecked && inState(excludesState, type)) {
      return
    }

    if (isChecked) {
      setExcludesState(excludesState.concat([type]))
    } else {
      var asfokasod = without(excludesState, type)

      setExcludesState(asfokasod)
    }
  }

  useEffect(() => {
    dispatch({ type: 'UPDATE_SETTING', payload: { key: 'excludes', value: excludesState } })
  }, [excludesState])

  useEffect(() => {
    setExcludesState(state.payloadSettings.excludes)
  }, [state.payloadSettings.excludes])

  function Title() {
    return (
      <CheckboxControl
        label='Title'
        checked={inState(excludesState, 'title')}
        onChange={isChecked => onChange(isChecked, 'title')}
      />
    )
  }

  function Description() {
    return (
      <CheckboxControl
        label='Description'
        checked={inState(excludesState, 'description')}
        onChange={isChecked => onChange(isChecked, 'description')}
      />
    )
  }

  function Images() {
    return (
      <CheckboxControl
        label='Images'
        checked={inState(excludesState, 'images')}
        onChange={isChecked => onChange(isChecked, 'images')}
      />
    )
  }

  function Pricing() {
    return (
      <CheckboxControl
        label='Pricing'
        checked={inState(excludesState, 'pricing')}
        onChange={isChecked => onChange(isChecked, 'pricing')}
      />
    )
  }

  function BuyButton() {
    return (
      <CheckboxControl
        label='Buy Button'
        checked={inState(excludesState, 'buy-button')}
        onChange={isChecked => onChange(isChecked, 'buy-button')}
      />
    )
  }

  return (
    <>
      <BaseControl label='Excludes'></BaseControl>
      <Title />
      <Description />
      <Images />
      <Pricing />
      <BuyButton />
    </>
  )
}

export { Excludes }
