import BlockRoot from '../_content/root';
import BlockWrapper from '../_content/wrapper';
import SingleProductControls from './controls';
import Icon from '../_icons';

function BlockSingleProduct() {
  return {
    title: wp.i18n.__('Single Product', 'wpshopify'),
    description: wp.i18n.__('This block displays a single Shopify product.', 'wpshopify'),
    category: 'wpshopify-products',
    keywords: [
      wp.i18n.__('products', 'wpshopify'),
      wp.i18n.__('shopify', 'wpshopify'),
      wp.i18n.__('store', 'wpshopify'),
      wp.i18n.__('ecommerce', 'wpshopify'),
      wp.i18n.__('sell', 'wpshopify'),
    ],
    icon: Icon,
    attributes: {
      payloadSettingsId: {
        type: 'string',
        default: '',
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
          <SingleProductControls />
        </BlockWrapper>
      );
    },
    save: (props) => {
      return <BlockRoot attributes={props.attributes} />;
    },
  };
}

function registerBlockSingleProduct() {
  wp.blocks.registerBlockType('wpshopify/single-product', BlockSingleProduct());
}

export default registerBlockSingleProduct;
