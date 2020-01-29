import {
  graphQuery,
  buildQueryFromSelections
} from '/Users/andrew/www/devil/devilbox-new/data/www/wpshopify-api'

import {
  Items,
  Products,
  Shop
} from '/Users/andrew/www/devil/devilbox-new/data/www/wpshopify-components'

import { BlockContext } from '../_state/context'
import to from 'await-to-js'

const { useEffect, useState, useContext, Suspense } = wp.element
const { Spinner } = wp.components

function BlockContent() {
  const [state, dispatch] = useContext(BlockContext)
  const [isLoading, setIsLoading] = useState(state.isLoading)

  function fetchNewItems(type, state) {
    const queryString = buildQueryFromSelections(state.payloadSettings)

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

  async function fetchProducts() {
    dispatch({ type: 'SET_IS_LOADING', payload: true })

    const [error, results] = await to(fetchNewItems('products', state))

    dispatch({ type: 'SET_IS_READY', payload: true })
    dispatch({ type: 'SET_IS_LOADING', payload: false })

    if (error) {
      dispatch({
        type: 'UPDATE_NOTICES',
        payload: {
          type: 'error',
          message: error
        }
      })
    } else {
      dispatch({
        type: 'SET_PAYLOAD',
        payload: results.model.products
      })
      dispatch({ type: 'SET_NOTICES', payload: [] })
    }

    setIsLoading(false)
  }

  useEffect(() => {
    fetchProducts()
  }, [
    state.payloadSettings.title,
    state.payloadSettings.tag,
    state.payloadSettings.vendor,
    state.payloadSettings.productType,
    state.payloadSettings.availableForSale,
    state.payloadSettings.connective,
    state.payloadSettings.reverse,
    state.payloadSettings.sortBy,
    state.payloadSettings.pageSize,
    state.payloadSettings.limit
  ])

  return isLoading ? (
    <p>
      Loading products <Spinner /> ...
    </p>
  ) : (
    //  <p>
    //    Current page size:{console.log('state.payload', state.payload)}
    //    {state.payload.map(product => (
    //      <p>{product.title}</p>
    //    ))}
    //  </p>

    <Suspense fallback=''>
      <Shop options={{ isCartReady: true }}>
         <Items options={state.componentSettings}>
         <Products />
         </Items>
      </Shop>
    </Suspense>
  )
}
export { BlockContent }
