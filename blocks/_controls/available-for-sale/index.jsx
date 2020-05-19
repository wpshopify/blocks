import { buildQueryFromSelections } from '/Users/andrew/www/devil/devilbox-new/data/www/wpshopify-api'

function AvailableForSale({ state, dispatch }) {
  const { CheckboxControl } = wp.components
  function onChange(newVal) {
    dispatch({
      type: 'UPDATE_SETTING',
      payload: { key: 'availableForSale', value: newVal },
    })

    dispatch({
      type: 'UPDATE_QUERY_PARAMS',
      payload: { query: buildQueryFromSelections(state.payloadSettings) },
    })
  }

  return (
    <CheckboxControl
      label={wp.i18n.__('Available for sale', 'wpshopify')}
      help={wp.i18n.__('Show products that are in stock', 'wpshopify')}
      checked={state.payloadSettings.availableForSale}
      onChange={onChange}
    />
  )
}

export { AvailableForSale }
