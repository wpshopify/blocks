import { buildQueryFromSelections } from '/Users/andrew/www/devil/devilbox-new/data/www/wpshopify-api'

const { CheckboxControl } = wp.components
const { __ } = wp.i18n

function AvailableForSale({ state, dispatch }) {
  function onChange(newVal) {
    dispatch({
      type: 'UPDATE_SETTING',
      payload: { key: 'availableForSale', value: newVal }
    })

    dispatch({
      type: 'UPDATE_QUERY_PARAMS',
      payload: { query: buildQueryFromSelections(state.payloadSettings) }
    })
  }

  return (
    <CheckboxControl
      label={__('Available for sale', 'wpshopify')}
      checked={state.payloadSettings.availableForSale}
      onChange={onChange}
    />
  )
}

export { AvailableForSale }
