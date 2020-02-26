import { Title } from '../../_controls/title'
import { Tag } from '../../_controls/tag'
import { Vendor } from '../../_controls/vendor'
import { ProductType } from '../../_controls/product-type'
import { AvailableForSale } from '../../_controls/available-for-sale'
import { Connective } from '../../_controls/connective'
import { SortBy } from '../../_controls/sort-by'
import { Reverse } from '../../_controls/reverse'
import { Pagination } from '../../_controls/pagination'
import { PageSize } from '../../_controls/page-size'
import { Limit } from '../../_controls/limit'
import { ItemsPerRow } from '../../_controls/items-per-row'
import { Excludes } from '../../_controls/excludes'
import { InfiniteScroll } from '../../_controls/infinite-scroll'
import { AddToCartButtonColor } from '../../_controls/add-to-cart-button-color'
import { AddToCartButtonText } from '../../_controls/add-to-cart-button-text'
import { VariantButtonColor } from '../../_controls/variant-button-color'
import { HideQuantity } from '../../_controls/hide-quantity'
import { ShowQuantityLabel } from '../../_controls/show-quantity-label'
import { QuantityLabelText } from '../../_controls/quantity-label-text'
import { MinQuantity } from '../../_controls/min-quantity'
import { MaxQuantity } from '../../_controls/max-quantity'
import { ShowPriceRange } from '../../_controls/show-price-range'
import { ShowCompareAt } from '../../_controls/show-compare-at'
import { ShowFeaturedOnly } from '../../_controls/show-featured-only'
import { ShowZoom } from '../../_controls/show-zoom'
import { TitleSize } from '../../_controls/title-size'
import { TitleColor } from '../../_controls/title-color'
import { DescriptionSize } from '../../_controls/description-size'
import { DescriptionColor } from '../../_controls/description-color'
import { DescriptionLength } from '../../_controls/description-length'
import { AlignHeight } from '../../_controls/align-height'
import { BlockControls } from '../../_controls'
import { BlockContext } from '../../_state/context'

const { PanelBody } = wp.components
const { __ } = wp.i18n
const { useContext } = wp.element

function ProductsControls() {
  const [state, dispatch] = useContext(BlockContext)

  return (
    <BlockControls>
      <PanelBody title={__('Filtering', wpshopify.misc.textdomain)} initialOpen={false}>
        <Title state={state} dispatch={dispatch} />
        <Tag state={state} dispatch={dispatch} />
        <Vendor state={state} dispatch={dispatch} />
        <ProductType state={state} dispatch={dispatch} />
        <AvailableForSale state={state} dispatch={dispatch} />
        <Connective state={state} dispatch={dispatch} />
      </PanelBody>

      <PanelBody title={__('Sorting', wpshopify.misc.textdomain)} initialOpen={false}>
        <SortBy state={state} dispatch={dispatch} />
        <Reverse state={state} dispatch={dispatch} />
      </PanelBody>

      <PanelBody title={__('Pagination', wpshopify.misc.textdomain)} initialOpen={false}>
        <Pagination state={state} dispatch={dispatch} />
        <PageSize state={state} dispatch={dispatch} />
        <Limit state={state} dispatch={dispatch} />
        <InfiniteScroll state={state} dispatch={dispatch} />
      </PanelBody>

      <PanelBody title={__('Layout', wpshopify.misc.textdomain)} initialOpen={false}>
        <ItemsPerRow state={state} dispatch={dispatch} />
        <Excludes state={state} dispatch={dispatch} />
        <AlignHeight state={state} dispatch={dispatch} />
      </PanelBody>

      <PanelBody title={__('Title', wpshopify.misc.textdomain)} initialOpen={false}>
        <TitleSize state={state} dispatch={dispatch} />
        <TitleColor state={state} dispatch={dispatch} />
      </PanelBody>

      <PanelBody title={__('Description', wpshopify.misc.textdomain)} initialOpen={false}>
        <DescriptionSize state={state} dispatch={dispatch} />
        <DescriptionColor state={state} dispatch={dispatch} />
        <DescriptionLength state={state} dispatch={dispatch} />
      </PanelBody>

      <PanelBody title={__('Pricing', wpshopify.misc.textdomain)} initialOpen={false}>
        <ShowPriceRange state={state} dispatch={dispatch} />
        <ShowCompareAt state={state} dispatch={dispatch} />
      </PanelBody>

      <PanelBody title={__('Images', wpshopify.misc.textdomain)} initialOpen={false}>
        <ShowFeaturedOnly state={state} dispatch={dispatch} />
        <ShowZoom state={state} dispatch={dispatch} />
      </PanelBody>

      <PanelBody title={__('Buy Button', wpshopify.misc.textdomain)} initialOpen={false}>
        <AddToCartButtonColor state={state} dispatch={dispatch} />
        <AddToCartButtonText state={state} dispatch={dispatch} />
        <VariantButtonColor state={state} dispatch={dispatch} />
        <HideQuantity state={state} dispatch={dispatch} />
        <ShowQuantityLabel state={state} dispatch={dispatch} />
        <QuantityLabelText state={state} dispatch={dispatch} />
        <MinQuantity state={state} dispatch={dispatch} />
        <MaxQuantity state={state} dispatch={dispatch} />
      </PanelBody>
    </BlockControls>
  )
}

export { ProductsControls }
