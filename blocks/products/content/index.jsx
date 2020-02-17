import {
  Items,
  Products,
  Shop
} from '/Users/andrew/www/devil/devilbox-new/data/www/wpshopify-components'

import { BlockContext } from '../_state/context'

const { useContext, Suspense } = wp.element
const { Spinner, Placeholder } = wp.components
const { __ } = wp.i18n

function BlockContent() {
  const [state, dispatch] = useContext(BlockContext)

  function beforeLoading() {
    console.log('BlockContent :: beforeLoading')
    dispatch({ type: 'SET_IS_LOADING', payload: true })
  }

  function afterLoading() {
    console.log('BlockContent :: afterLoading')

    dispatch({ type: 'SET_IS_LOADING', payload: false })
  }

  return (
    <Suspense
      fallback={<Placeholder label={__('Loading products ...', 'wpshopify')} icon={<Spinner />} />}>
      <Shop options={{ isCartReady: true }}>
        <Items
          options={[
            {
              componentElement: state.componentElement,
              componentType: state.componentType,
              payloadSettings: state.payloadSettings
            }
          ]}
          customQueryParams={state.queryParams}
          afterLoading={afterLoading}
          beforeLoading={beforeLoading}>
          <Products />
        </Items>
      </Shop>
    </Suspense>
  )
}
export { BlockContent }
