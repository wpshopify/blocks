import {
  Items,
  Products,
  Shop
} from '/Users/andrew/www/devil/devilbox-new/data/www/wpshopify-components'

import { BlockContext } from '../_state/context'

const { useContext, Suspense } = wp.element
const { Spinner, Placeholder } = wp.components
const { __ } = wp.i18n

function BlockContent({ children, hasItems = true }) {
  const [state, dispatch] = useContext(BlockContext)

  function beforeLoading() {
    dispatch({ type: 'SET_IS_LOADING', payload: true })
  }

  function afterLoading() {
    dispatch({ type: 'SET_IS_LOADING', payload: false })
  }

  return (
    <Suspense
      fallback={
        <Placeholder
          label={__('Loading ' + state.componentType + ' ...', wpshopify.misc.textdomain)}
          icon={<Spinner />}
        />
      }>
      <Shop options={{ isCartReady: true }}>
        {hasItems ? (
          <Items
            options={[
              {
                componentElement: state.componentElement,
                componentType: state.componentType,
                payloadSettings: state.payloadSettings
              }
            ]}
            customQueryParams={state.queryParams}
            limit={state.payloadSettings.limit}
            infiniteScroll={state.payloadSettings.infiniteScroll}
            afterLoading={afterLoading}
            beforeLoading={beforeLoading}>
            {children}
          </Items>
        ) : (
          { children }
        )}
      </Shop>
    </Suspense>
  )
}
export { BlockContent }
