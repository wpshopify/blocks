import {
  Items,
  Shop,
  ProductPlaceholder,
} from '/Users/andrew/www/devil/devilbox-new/data/www/wpshopify-components'
import {
  fetchNewItems,
  buildQueryFromSelections,
} from '/Users/andrew/www/devil/devilbox-new/data/www/wpshopify-api'
import { BlockContext } from '../_state/context'
const { useContext, useEffect } = wp.element

function BlockContent({ children, hasItems = true }) {
  const [state, dispatch] = useContext(BlockContext)

  useEffect(() => {
    dispatch({ type: 'SET_IS_LOADING', payload: true })
    console.log('state', state)

    fetchNewItems(state)
      .then(function (newItems) {
        console.log('<BlockContent> :: newItems', newItems)

        if (newItems.length) {
          dispatch({
            type: 'SET_PAYLOAD',
            payload: newItems,
          })
          dispatch({
            type: 'UPDATE_QUERY_PARAMS',
            payload: { query: buildQueryFromSelections(state.payloadSettings) },
          })
        } else {
          dispatch({
            type: 'UPDATE_NOTICES',
            payload: 'No products found',
          })
        }
        dispatch({ type: 'SET_IS_LOADING', payload: false })
      })
      .catch((error) => {
        console.log('<BlockContent> :: ', error)

        dispatch({
          type: 'UPDATE_NOTICES',
          payload: error,
        })

        dispatch({ type: 'SET_IS_LOADING', payload: false })
      })
  }, [state.queryParams])

  return state.isLoading ? (
    <ProductPlaceholder />
  ) : (
    <Shop options={{ isCartReady: true }}>
      <Items
        options={[
          {
            componentElement: state.componentElement,
            componentType: state.componentType,
            payloadSettings: state.payloadSettings,
          },
        ]}
        payload={state.payload}
        customQueryParams={state.queryParams}
        limit={state.payloadSettings.limit}
        infiniteScroll={state.payloadSettings.infiniteScroll}>
        {children}
      </Items>
    </Shop>
  )
}
export { BlockContent }
