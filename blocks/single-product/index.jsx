import { RootElement } from '/Users/andrew/www/devil/devilbox-new/data/www/wpshopify-components'

import { BlockProvider } from '../_state/provider'
import { SingleProductControls } from './controls'
import { ProductsContent } from '../products/content'
import { Icon } from '../_icons'

const { __ } = wp.i18n

function BlockSingleProduct() {
  return {
    title: __('Single Product', wpshopify.misc.textdomain),
    description: __('This block displays a single Shopify product.', wpshopify.misc.textdomain),
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
