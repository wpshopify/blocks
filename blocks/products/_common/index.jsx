import compact from 'lodash/compact'
import map from 'lodash/map'
import has from 'lodash/has'
import isEmpty from 'lodash/isEmpty'
import isString from 'lodash/isString'
import {
  graphQuery,
  buildQueryFromSelections
} from '/Users/andrew/www/devil/devilbox-new/data/www/wpshopify-api'
// import { buildQueryStringFromSelections } from "../../storefront/selections"

function defaultColors() {
  return [
    { name: 'Pale pink', color: '#f78da8' },
    { name: 'Vivid red', color: '#cf2e2e' },
    { name: 'Luminous vivid', color: '#ff6a00' },
    { name: 'Luminous vivid amber', color: '#fcb900' },
    { name: 'Light green cyan', color: '#7bdcb5' },
    { name: 'Vivid green cyan', color: '#00d084' },
    { name: 'Pale cyan blue', color: '#8ed2fc' },
    { name: 'Cyan blue', color: '#0692e3' },
    { name: 'Light grey', color: '#7d7d7d' },
    { name: 'Medium blue grey', color: '#525252' },
    { name: 'Dark grey', color: '#262626' }
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
