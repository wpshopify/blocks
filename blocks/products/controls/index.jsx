/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { Title } from './title'
import { Tag } from './tag'
import { Vendor } from './vendor'
import { ProductType } from './product-type'
import { ProductId } from './product-id'
import { CreatedAt } from './created-at'
import { UpdatedAt } from './updated-at'
import { AvailableForSale } from './available-for-sale'
import { Connective } from './connective'
import { SortBy } from './sort-by'
import { Reverse } from './reverse'
import { Pagination } from './pagination'
import { NoResultsText } from './no-results-text'
import { PageSize } from './page-size'
import { Limit } from './limit'
import { ItemsPerRow } from './items-per-row'
import { Excludes } from './excludes'
import { StorefrontAccessToken } from './storefront-access-token'
import { MyShopifyDomain } from './my-shopify-domain'
import { UpdateCredentialsButton } from './update-credentials'
import { InfiniteScroll } from './infinite-scroll'
import { InfiniteScrollOffset } from './infinite-scroll-offset'
import { AddToCartButtonColor } from './add-to-cart-button-color'
import { AddToCartButtonText } from './add-to-cart-button-text'
import { VariantButtonColor } from './variant-button-color'
import { HideQuantity } from './hide-quantity'
import { ShowQuantityLabel } from './show-quantity-label'
import { QuantityLabelText } from './quantity-label-text'
import { MinQuantity } from './min-quantity'
import { MaxQuantity } from './max-quantity'
import { ShowPriceRange } from './show-price-range'
import { ShowCompareAt } from './show-compare-at'
import { ShowFeaturedOnly } from './show-featured-only'
import { ShowZoom } from './show-zoom'
import { TitleSize } from './title-size'
import { TitleColor } from './title-color'
import { DescriptionSize } from './description-size'
import { DescriptionColor } from './description-color'
import { DescriptionLength } from './description-length'
import { AlignHeight } from './align-height'
import { BlockContext } from '../_state/context'
const { InspectorControls } = wp.blockEditor
const { PanelBody } = wp.components

function BlockControls() {
  const [state, dispatch] = wp.element.useContext(BlockContext)

  wp.element.useEffect(() => {
    console.log('Payload set! ', state.payload)
  }, [state.payload])

  return (
    <InspectorControls>
      <PanelBody title='Filtering' initialOpen={false}>
        <Title state={state} dispatch={dispatch} />
        <Tag state={state} dispatch={dispatch} />
        <Vendor state={state} dispatch={dispatch} />
        <ProductType state={state} dispatch={dispatch} />
        <AvailableForSale state={state} dispatch={dispatch} />
        <Connective state={state} dispatch={dispatch} />
      </PanelBody>

      <PanelBody title='Sorting' initialOpen={false}>
        <SortBy state={state} dispatch={dispatch} />
        <Reverse state={state} dispatch={dispatch} />
      </PanelBody>

      <PanelBody title='Pagination' initialOpen={false}>
        <Pagination state={state} dispatch={dispatch} />
        <PageSize state={state} dispatch={dispatch} />
        <Limit state={state} dispatch={dispatch} />
        <NoResultsText state={state} dispatch={dispatch} />
        <InfiniteScroll state={state} dispatch={dispatch} />
        <InfiniteScrollOffset state={state} dispatch={dispatch} />
      </PanelBody>

      <PanelBody title='Layout' initialOpen={false}>
        <ItemsPerRow state={state} dispatch={dispatch} />
        <Excludes state={state} dispatch={dispatch} />
        <AlignHeight state={state} dispatch={dispatch} />
      </PanelBody>

      <PanelBody title='Title' initialOpen={false}>
        <TitleSize state={state} dispatch={dispatch} />
        <TitleColor state={state} dispatch={dispatch} />
      </PanelBody>

      <PanelBody title='Description' initialOpen={false}>
        <DescriptionSize state={state} dispatch={dispatch} />
        <DescriptionColor state={state} dispatch={dispatch} />
        <DescriptionLength state={state} dispatch={dispatch} />
      </PanelBody>

      <PanelBody title='Pricing' initialOpen={false}>
        <ShowPriceRange state={state} dispatch={dispatch} />
        <ShowCompareAt state={state} dispatch={dispatch} />
      </PanelBody>

      <PanelBody title='Images' initialOpen={false}>
        <ShowFeaturedOnly state={state} dispatch={dispatch} />
        <ShowZoom state={state} dispatch={dispatch} />
      </PanelBody>

      <PanelBody title='Buy Button' initialOpen={false}>
        <AddToCartButtonColor state={state} dispatch={dispatch} />
        <AddToCartButtonText state={state} dispatch={dispatch} />
        <VariantButtonColor state={state} dispatch={dispatch} />
        <HideQuantity state={state} dispatch={dispatch} />
        <ShowQuantityLabel state={state} dispatch={dispatch} />
        <QuantityLabelText state={state} dispatch={dispatch} />
        <MinQuantity state={state} dispatch={dispatch} />
        <MaxQuantity state={state} dispatch={dispatch} />
      </PanelBody>
    </InspectorControls>
  )
}

export { BlockControls }
