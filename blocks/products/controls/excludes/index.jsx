import without from 'lodash/without'
const { __ } = wp.i18n
const { useEffect, useState, useRef } = wp.element
const { CheckboxControl, BaseControl } = wp.components

function Excludes({ state, dispatch }) {
  const [excludesState, setExcludesState] = useState(state.payloadSettings.excludes)
  const isFirstRender = useRef(true)

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
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }

    dispatch({ type: 'UPDATE_SETTING', payload: { key: 'excludes', value: excludesState } })
  }, [excludesState])

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }

    setExcludesState(state.payloadSettings.excludes)
  }, [state.payloadSettings.excludes])

  function Title() {
    return (
      <CheckboxControl
        label={__('Title', 'wpshopify')}
        checked={inState(excludesState, 'title')}
        onChange={isChecked => onChange(isChecked, 'title')}
      />
    )
  }

  function Description() {
    return (
      <CheckboxControl
        label={__('Description', 'wpshopify')}
        checked={inState(excludesState, 'description')}
        onChange={isChecked => onChange(isChecked, 'description')}
      />
    )
  }

  function Images() {
    return (
      <CheckboxControl
        label={__('Images', 'wpshopify')}
        checked={inState(excludesState, 'images')}
        onChange={isChecked => onChange(isChecked, 'images')}
      />
    )
  }

  function Pricing() {
    return (
      <CheckboxControl
        label={__('Pricing', 'wpshopify')}
        checked={inState(excludesState, 'pricing')}
        onChange={isChecked => onChange(isChecked, 'pricing')}
      />
    )
  }

  function BuyButton() {
    return (
      <CheckboxControl
        label={__('Buy Button', 'wpshopify')}
        checked={inState(excludesState, 'buy-button')}
        onChange={isChecked => onChange(isChecked, 'buy-button')}
      />
    )
  }

  return (
    <>
      <BaseControl label={__('Exclude from layout', 'wpshopify')}></BaseControl>
      <Title />
      <Description />
      <Images />
      <Pricing />
      <BuyButton />
    </>
  )
}

export { Excludes }
