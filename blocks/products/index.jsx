import BlockRoot from '../_content/root';
import BlockWrapper from '../_content/wrapper';
import ProductsControls from './controls';
import Icon from '../_icons';

function BlockProducts() {
  return {
    title: wp.i18n.__('Products', 'wpshopify'),
    description: wp.i18n.__(
      'This block displays one or more Shopify products in a grid layout.',
      'wpshopify'
    ),
    category: 'wpshopify-products',
    icon: Icon,
    keywords: [
      wp.i18n.__('products', 'wpshopify'),
      wp.i18n.__('shopify', 'wpshopify'),
      wp.i18n.__('store', 'wpshopify'),
      wp.i18n.__('ecommerce', 'wpshopify'),
      wp.i18n.__('sell', 'wpshopify'),
    ],
    attributes: {
      payloadSettingsId: {
        type: 'string',
      },
      defaultPayloadSettings: {
        type: 'object',
        default: wpshopify.settings.products,
      },
      clientId: {
        type: 'string',
        default: '',
      },
    },
    edit: (props) => {
      return (
        <BlockWrapper blockProps={props}>
          <ProductsControls />
        </BlockWrapper>
      );
    },
    save: (props) => {
      return <BlockRoot attributes={props.attributes} />;
    },
  };
}

function registerBlockProducts() {
  wp.blocks.registerBlockType('wpshopify/products', BlockProducts());
}

export default registerBlockProducts;
