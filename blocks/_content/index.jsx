import { Items, Shop } from '/Users/andrew/www/devil/devilbox-new/data/www/wpshopify-components'
import { fetchNewItems } from '/Users/andrew/www/devil/devilbox-new/data/www/wpshopify-api'
import { BlockContext } from '../_state/context'
const { useContext, useEffect, useState } = wp.element

function BlockContent({ children, hasItems = true }) {
  const [state, dispatch] = useContext(BlockContext)

  useEffect(() => {
    fetchNewItems(state)
      .then(function (newItems) {
        console.log('<BlockContent> :: newItems', newItems)

        //   itemsDispatch({ type: 'SET_IS_LOADING', payload: false })
        //   itemsDispatch({ type: 'HAS_QUERY_PARAMS_CHANGED', payload: false })
        //   updatePayloadState(newItems)

        dispatch({
          type: 'SET_PAYLOAD',
          payload: newItems,
        })
      })
      .catch((error) => {
        console.log('<BlockContent> :: ', error)

        //   dispatch({
        //     type: 'UPDATE_NOTICES',
        //     payload: error,
        //   })

        //   dispatch({ type: 'SET_IS_LOADING', payload: false })
      })

    //  dispatch({ type: 'SET_PAYLOAD', payload: })
  }, [state.queryParams])

  return (
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
