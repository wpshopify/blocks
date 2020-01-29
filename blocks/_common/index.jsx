import isArray from 'lodash/isArray'
import isObject from 'lodash/isObject'

function toCamel(s) {
  return s.replace(/([-_][a-z])/gi, $1 => {
    return $1
      .toUpperCase()
      .replace('-', '')
      .replace('_', '')
  })
}

function underscoreToCamel(o) {
  if (isArray(o)) {
    return o
  }

  if (isObject(o)) {
    const n = {}

    Object.keys(o).forEach(k => {
      n[toCamel(k)] = underscoreToCamel(o[k])
    })

    return n
  }

  return o
}

// storeName = 'wpshopify/core'
function withStore(Component, storeName) {
  return wp.compose.compose([
    wp.data.withSelect(select => {
      return {
        state: select(storeName).getState()
      }
    }),
    wp.data.withDispatch(dispatch => {
      return {
        dispatch: newData => {
          dispatch(storeName).updateState(newData)
        }
      }
    })
  ])(Component)
}

export { withStore, underscoreToCamel }
