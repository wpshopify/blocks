import { Title } from '../../_controls/title'
import { Excludes } from '../../_controls/excludes'
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
import { VariantStyle } from '../../_controls/variant-style'
import { ProductsLinkTarget } from '../../_controls/products-link-target'
import { ProductsLinkTo } from '../../_controls/products-link-to'
import { BlockControls } from '../../_controls'
import { BlockContext } from '../../_state/context'

function SingleProductControls() {
  const { PanelBody } = wp.components
  const { useContext } = wp.element
  const [state, dispatch] = useContext(BlockContext)

  return (
    <BlockControls>
      <PanelBody
        title={wp.i18n.__('Filtering', 'wpshopify')}
        initialOpen={true}
        className='wps-panel-body'>
        <Title state={state} dispatch={dispatch} />
      </PanelBody>

      <PanelBody
        title={wp.i18n.__('General', 'wpshopify')}
        initialOpen={false}
        className='wps-panel-body'>
        <ProductsLinkTo state={state} dispatch={dispatch} />
        <ProductsLinkTarget state={state} dispatch={dispatch} />
      </PanelBody>

      <PanelBody
        title={wp.i18n.__('Layout', 'wpshopify')}
        initialOpen={false}
        className='wps-panel-body'>
        <Excludes state={state} dispatch={dispatch} />
        <AlignHeight state={state} dispatch={dispatch} />
      </PanelBody>

      <PanelBody
        title={wp.i18n.__('Title', 'wpshopify')}
        initialOpen={false}
        className='wps-panel-body'>
        <TitleSize state={state} dispatch={dispatch} />
        <TitleColor state={state} dispatch={dispatch} />
      </PanelBody>

      <PanelBody
        title={wp.i18n.__('Description', 'wpshopify')}
        initialOpen={false}
        className='wps-panel-body'>
        <DescriptionSize state={state} dispatch={dispatch} />
        <DescriptionColor state={state} dispatch={dispatch} />
        <DescriptionLength state={state} dispatch={dispatch} />
      </PanelBody>

      <PanelBody
        title={wp.i18n.__('Pricing', 'wpshopify')}
        initialOpen={false}
        className='wps-panel-body'>
        <ShowPriceRange state={state} dispatch={dispatch} />
        <ShowCompareAt state={state} dispatch={dispatch} />
      </PanelBody>

      <PanelBody
        title={wp.i18n.__('Images', 'wpshopify')}
        initialOpen={false}
        className='wps-panel-body'>
        <ShowFeaturedOnly state={state} dispatch={dispatch} />
        <ShowZoom state={state} dispatch={dispatch} />
      </PanelBody>

      <PanelBody
        title={wp.i18n.__('Buy Button', 'wpshopify')}
        initialOpen={false}
        className='wps-panel-body'>
        <AddToCartButtonColor state={state} dispatch={dispatch} />
        <AddToCartButtonText state={state} dispatch={dispatch} />
        <VariantButtonColor state={state} dispatch={dispatch} />
        <HideQuantity state={state} dispatch={dispatch} />
        <ShowQuantityLabel state={state} dispatch={dispatch} />
        <QuantityLabelText state={state} dispatch={dispatch} />
        <MinQuantity state={state} dispatch={dispatch} />
        <MaxQuantity state={state} dispatch={dispatch} />
        <VariantStyle state={state} dispatch={dispatch} />
      </PanelBody>
    </BlockControls>
  )
}

export { SingleProductControls }
