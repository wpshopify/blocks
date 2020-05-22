import { RootElement } from '/Users/andrew/www/devil/devilbox-new/data/www/wpshopify-components'
import { BlockProvider } from '../_state/provider'
import { SingleProductControls } from './controls'
import { ProductsContent } from '../products/content'
import { Icon } from '../_icons'

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
      },
      defaultPayloadSettings: {
        type: 'object',
        default: wpshopify.settings.products,
      },
    },
    edit: (props) => {
      return (
        <BlockProvider options={wpshopify} blockProps={props}>
          <SingleProductControls />
          <ProductsContent />
        </BlockProvider>
      )
    },
    save: (props) => {
      return <RootElement payloadSettingsId={props.attributes.payloadSettingsId} />
    },
  }
}

function registerBlockSingleProduct() {
  wp.blocks.registerBlockType('wpshopify/single-product', BlockSingleProduct())
}

export { registerBlockSingleProduct }
