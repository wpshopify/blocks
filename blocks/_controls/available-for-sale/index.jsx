import { buildQueryFromSelections } from '/Users/andrew/www/devil/devilbox-new/data/www/wpshopify-api'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'

const { CheckboxControl, Spinner } = wp.components
const { __ } = wp.i18n

function AvailableForSale({ state, dispatch }) {
  const spinnerStyles = css`
    position: relative;
    top: -3px;
    right: 6px;
    margin: 0;

    .components-spinner {
      margin: 0;
    }
  `
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
      help={__('Show products that are in stock', 'wpshopify')}
      checked={state.payloadSettings.availableForSale}
      onChange={onChange}
    />
  )
}

export { AvailableForSale }
