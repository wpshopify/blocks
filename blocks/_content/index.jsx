import {
  Items,
  Shop,
  ProductPlaceholder,
  Notices,
} from '/Users/andrew/www/devil/devilbox-new/data/www/wpshopify-components'
import { fetchNewItems } from '/Users/andrew/www/devil/devilbox-new/data/www/wpshopify-api'
import { BlockContext } from '../_state/context'

function BlockContent({ children, isBootstrapping }) {
  const { useContext, useEffect } = wp.element
  const [state, dispatch] = useContext(BlockContext)

  useEffect(() => {
    dispatch({ type: 'SET_IS_LOADING', payload: true })

    fetchNewItems(state)
      .then(function (newItems) {
        dispatch({ type: 'SET_IS_LOADING', payload: false })

        if (isBootstrapping) {
          isBootstrapping.current = false
        }

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
        if (isBootstrapping) {
          isBootstrapping.current = false
        }

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

  return isBootstrapping.current ? (
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
        infiniteScroll={state.payloadSettings.infiniteScroll}
        isParentLoading={state.isLoading}>
        {children}
      </Items>
    </Shop>
  ) : (
    <Notices notices={state.notices} noticeGroup='block' />
  )
}
export { BlockContent }
