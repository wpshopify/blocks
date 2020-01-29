import { withStore } from '../../../_common'
const { RadioControl } = wp.components

function Connective({ state, dispatch }) {
  function onChange(newVal) {
    dispatch({ type: 'UPDATE_SETTING', payload: { key: 'connective', value: newVal } })
  }

  return (
    <RadioControl
      label='Connective'
      help='Determines whether to search for any match, or a group match. Default is AND'
      selected={state.payloadSettings.connective}
      options={[
        { label: 'AND', value: 'AND' },
        { label: 'OR', value: 'OR' }
      ]}
      onChange={onChange}
    />
  )
}

export { Connective }
