import { Title } from '../../_controls/title';
import { AddToCartButtonColor } from '../../_controls/add-to-cart-button-color';
import { AddToCartButtonText } from '../../_controls/add-to-cart-button-text';
import { VariantButtonColor } from '../../_controls/variant-button-color';
import { HideQuantity } from '../../_controls/hide-quantity';
import { ShowQuantityLabel } from '../../_controls/show-quantity-label';
import { QuantityLabelText } from '../../_controls/quantity-label-text';
import { MinQuantity } from '../../_controls/min-quantity';
import { MaxQuantity } from '../../_controls/max-quantity';
import { VariantStyle } from '../../_controls/variant-style';
import { BlockControls } from '../../_controls';
import { BlockContext } from '../../_state/context';
import { ProductsLinkTarget } from '../../_controls/products-link-target';
import { ProductsLinkTo } from '../../_controls/products-link-to';
import { MyShopifyDomain } from '../../_controls/my-shopify-domain';
import { StorefrontAccessToken } from '../../_controls/storefront-access-token';
import DirectCheckout from '../../_controls/direct-checkout';
import { UpdateCredentialsButton } from '../../_controls/update-credentials';

function BuyButtonControls() {
  const { PanelBody } = wp.components;
  const { useContext } = wp.element;
  const [state, dispatch] = useContext(BlockContext);

  return (
    <BlockControls>
      <PanelBody
        title={wp.i18n.__('Connection', 'wpshopify')}
        initialOpen={true}
        className='wps-panel-body'>
        <MyShopifyDomain state={state} dispatch={dispatch} />
        <StorefrontAccessToken state={state} dispatch={dispatch} />
        <UpdateCredentialsButton state={state} dispatch={dispatch} />
      </PanelBody>

      <PanelBody
        title={wp.i18n.__('Filtering', 'wpshopify')}
        initialOpen={false}
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

      <PanelBody
        title={wp.i18n.__('Checkout', 'wpshopify')}
        initialOpen={false}
        className='wps-panel-body'>
        <DirectCheckout state={state} dispatch={dispatch} />
      </PanelBody>
    </BlockControls>
  );
}

export { BuyButtonControls };
