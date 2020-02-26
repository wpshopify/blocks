import compact from 'lodash/compact'
import map from 'lodash/map'
import isEmpty from 'lodash/isEmpty'
import isString from 'lodash/isString'
import {
  graphQuery,
  buildQueryFromSelections
} from '/Users/andrew/www/devil/devilbox-new/data/www/wpshopify-api'
const { __ } = wp.i18n

function defaultColors() {
  return [
    { name: __('Pale pink', wpshopify.misc.textdomain), color: '#f78da8' },
    { name: __('Vivid red', wpshopify.misc.textdomain), color: '#cf2e2e' },
    { name: __('Luminous vivid', wpshopify.misc.textdomain), color: '#ff6a00' },
    { name: __('Luminous vivid amber', wpshopify.misc.textdomain), color: '#fcb900' },
    { name: __('Light green cyan', wpshopify.misc.textdomain), color: '#7bdcb5' },
    { name: __('Vivid green cyan', wpshopify.misc.textdomain), color: '#00d084' },
    { name: __('Pale cyan blue', wpshopify.misc.textdomain), color: '#8ed2fc' },
    { name: __('Cyan blue', wpshopify.misc.textdomain), color: '#0692e3' },
    { name: __('Light grey', wpshopify.misc.textdomain), color: '#7d7d7d' },
    { name: __('Medium blue grey', wpshopify.misc.textdomain), color: '#525252' },
    { name: __('Dark grey', wpshopify.misc.textdomain), color: '#262626' }
  ]
}

function convertValuesToString(vals) {
  if (!vals || isEmpty(vals)) {
    return ''
  }

  if (isString(vals)) {
    return vals
  }

  return vals.join(', ')
}

function splitSelection(string) {
  return string.split(',')
}

function removeEmptyValues(stringSelection) {
  var stuff = compact(splitSelection(stringSelection))

  var final = map(stuff, val => val.trim())

  return compact(final)
}

function fetchNewItems(type, builderState) {
  const queryString = buildQueryFromSelections(builderState.payloadSettings)

  var options = {
    first: state.payloadSettings.limit
      ? state.payloadSettings.limit
      : state.payloadSettings.pageSize,
    query: queryString,
    reverse: state.payloadSettings.reverse,
    sortKey: state.payloadSettings.sortBy
  }

  return graphQuery(type, options)
}

export { defaultColors, fetchNewItems, removeEmptyValues, convertValuesToString }
