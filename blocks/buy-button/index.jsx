import { RootElement } from '/Users/andrew/www/devil/devilbox-new/data/www/wpshopify-components'
import { BlockProvider } from '../_state/provider'
import { BuyButtonControls } from './controls'
import ProductsContent from '../products/content'
import { Icon } from '../_icons'

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
    },
    edit: (props) => {
      return (
        <BlockProvider options={wpshopify} blockProps={props}>
          <BuyButtonControls />
          <ProductsContent />
        </BlockProvider>
      )
    },
    save: (props) => {
      return <RootElement payloadSettingsId={props.attributes.payloadSettingsId} />
    },
  }
}

function registerBlockBuyButton() {
  wp.blocks.registerBlockType('wpshopify/buy-button', BlockBuyButton())
}

export { registerBlockBuyButton }
