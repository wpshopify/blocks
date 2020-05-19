import { RootElement } from '/Users/andrew/www/devil/devilbox-new/data/www/wpshopify-components'

import { BlockProvider } from '../_state/provider'
import { ProductsControls } from './controls'
import { ProductsContent } from './content'
import { Icon } from '../_icons'

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
    },
    edit: (props) => {
      return (
        <BlockProvider options={wpshopify} blockProps={props}>
          <ProductsControls />
          <ProductsContent />
        </BlockProvider>
      )
    },
    save: (props) => {
      return <RootElement payloadSettingsId={props.attributes.payloadSettingsId} />
    },
  }
}

function registerBlockProducts() {
  wp.blocks.registerBlockType('wpshopify/products', BlockProducts())
}

export { registerBlockProducts }
