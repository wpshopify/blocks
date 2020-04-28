import { Title } from '../../_controls/title'
import { AddToCartButtonColor } from '../../_controls/add-to-cart-button-color'
import { AddToCartButtonText } from '../../_controls/add-to-cart-button-text'
import { VariantButtonColor } from '../../_controls/variant-button-color'
import { HideQuantity } from '../../_controls/hide-quantity'
import { ShowQuantityLabel } from '../../_controls/show-quantity-label'
import { QuantityLabelText } from '../../_controls/quantity-label-text'
import { MinQuantity } from '../../_controls/min-quantity'
import { MaxQuantity } from '../../_controls/max-quantity'
import { VariantStyle } from '../../_controls/variant-style'
import { BlockControls } from '../../_controls'
import { BlockContext } from '../../_state/context'
import { ProductsLinkTarget } from '../../_controls/products-link-target'
import { ProductsLinkTo } from '../../_controls/products-link-to'

const { __ } = wp.i18n
const { PanelBody } = wp.components
const { useContext } = wp.element

function BuyButtonControls() {
  const [state, dispatch] = useContext(BlockContext)

  return (
    <BlockControls>
      <PanelBody
        title={__('Filtering', wpshopify.misc.textdomain)}
        initialOpen={true}
        className='wps-panel-body'>
        <Title state={state} dispatch={dispatch} />
      </PanelBody>

      <PanelBody
        title={__('General', wpshopify.misc.textdomain)}
        initialOpen={false}
        className='wps-panel-body'>
        <ProductsLinkTo state={state} dispatch={dispatch} />
        <ProductsLinkTarget state={state} dispatch={dispatch} />
      </PanelBody>

      <PanelBody
        title={__('Buy Button', wpshopify.misc.textdomain)}
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

export { BuyButtonControls }
