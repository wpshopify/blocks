import BlockRoot from '../_content/root';
import BlockWrapper from '../_content/wrapper';
import BuyButtonControls from './controls';
import Icon from '../_icons';

function BlockBuyButton() {
  return {
    title: wp.i18n.__('Buy Button', 'wpshopify'),
    description: wp.i18n.__(
      'This block displays a simple "buy button" without the product title, images, or price.',
      'wpshopify'
    ),
    keywords: [
      wp.i18n.__('products', 'wpshopify'),
      wp.i18n.__('shopify', 'wpshopify'),
      wp.i18n.__('store', 'wpshopify'),
      wp.i18n.__('button', 'wpshopify'),
      wp.i18n.__('buy', 'wpshopify'),
    ],
    category: 'wpshopify-products',
    icon: Icon,
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
          <BuyButtonControls />
        </BlockWrapper>
      );
    },
    save: (props) => {
      return <BlockRoot attributes={props.attributes} />;
    },
  };
}

function registerBlockBuyButton() {
  wp.blocks.registerBlockType('wpshopify/buy-button', BlockBuyButton());
}

export default registerBlockBuyButton;
