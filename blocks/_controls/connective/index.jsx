import { buildQueryFromSelections } from '/Users/andrew/www/devil/devilbox-new/data/www/wpshopify-api'

const { RadioControl } = wp.components
const { __ } = wp.i18n

function Connective({ state, dispatch }) {
  function onChange(newVal) {
    dispatch({ type: 'UPDATE_SETTING', payload: { key: 'connective', value: newVal } })

    dispatch({
      type: 'UPDATE_QUERY_PARAMS',
      payload: { query: buildQueryFromSelections(state.payloadSettings) }
    })
  }

  return (
    <RadioControl
      label={__('Match criteria', 'wpshopify')}
      help={__(
        'Determines how a match is found when filtering products. "OR" will attempt to match any products from the set filters. "AND" will only match products when all filters are true. Default is AND',
        'wpshopify'
      )}
      selected={state.payloadSettings.connective}
      options={[
        { label: __('AND', 'wpshopify'), value: 'AND' },
        { label: __('OR', 'wpshopify'), value: 'OR' }
      ]}
      onChange={onChange}
    />
  )
}

export { Connective }
