import {
  Items,
  Shop,
  ProductPlaceholder,
  Notices,
} from '/Users/andrew/www/devil/devilbox-new/data/www/wpshopify-components'
import { fetchNewItems } from '/Users/andrew/www/devil/devilbox-new/data/www/wpshopify-api'

import { BlockContext } from '../_state/context'

const { useContext, useEffect } = wp.element

function BlockContent({ children, hasItems = true }) {
  const [state, dispatch] = useContext(BlockContext)
  console.log('::::: BlockContent :::::')

  useEffect(() => {
    console.log('::::: BlockContent useEffect :::::', state.queryParams)

    dispatch({ type: 'SET_IS_LOADING', payload: true })

    fetchNewItems(state)
      .then(function (newItems) {
        console.log('<BlockContent> :: newItems', newItems)

        dispatch({ type: 'SET_IS_LOADING', payload: false })

        if (newItems.length) {
          dispatch({
            type: 'SET_PAYLOAD',
            payload: newItems,
          })
        } else {
          dispatch({
            type: 'SET_PAYLOAD',
            payload: [],
          })
          dispatch({
            type: 'UPDATE_NOTICES',
            payload: {
              type: 'info',
              message: 'No products found',
            },
          })
        }
      })
      .catch((error) => {
        console.log('<BlockContent>rrrrrrrrrrrrrr :: ', error)

        dispatch({ type: 'SET_IS_LOADING', payload: false })

        dispatch({
          type: 'UPDATE_NOTICES',
          payload: {
            type: 'error',
            message: error,
          },
        })
      })
  }, [state.queryParams])
  console.log('state.payload.length', state.payload.length)

  return state.isLoading ? (
    <ProductPlaceholder />
  ) : state.payload.length ? (
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
  ) : (
    <Notices notices={state.notices} noticeGroup='block' />
  )
}
export { BlockContent }
