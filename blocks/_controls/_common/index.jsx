import compact from 'lodash/compact'
import map from 'lodash/map'
import isEmpty from 'lodash/isEmpty'
import isString from 'lodash/isString'
import {
  graphQuery,
  buildQueryFromSelections,
} from '/Users/andrew/www/devil/devilbox-new/data/www/wpshopify-api'

function defaultColors() {
  return [
    { name: wp.i18n.__('Pale pink', 'wpshopify'), color: '#f78da8' },
    { name: wp.i18n.__('Vivid red', 'wpshopify'), color: '#cf2e2e' },
    { name: wp.i18n.__('Luminous vivid', 'wpshopify'), color: '#ff6a00' },
    { name: wp.i18n.__('Luminous vivid amber', 'wpshopify'), color: '#fcb900' },
    { name: wp.i18n.__('Light green cyan', 'wpshopify'), color: '#7bdcb5' },
    { name: wp.i18n.__('Vivid green cyan', 'wpshopify'), color: '#00d084' },
    { name: wp.i18n.__('Pale cyan blue', 'wpshopify'), color: '#8ed2fc' },
    { name: wp.i18n.__('Cyan blue', 'wpshopify'), color: '#0692e3' },
    { name: wp.i18n.__('Light grey', 'wpshopify'), color: '#7d7d7d' },
    { name: wp.i18n.__('Medium blue grey', 'wpshopify'), color: '#525252' },
    { name: wp.i18n.__('Dark grey', 'wpshopify'), color: '#262626' },
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

  var final = map(stuff, (val) => val.trim())

  return compact(final)
}

export { defaultColors, removeEmptyValues, convertValuesToString }
