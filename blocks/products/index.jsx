import {
  RootElement,
  underscoreToCamel
} from '/Users/andrew/www/devil/devilbox-new/data/www/wpshopify-components'

import { BlockProvider } from '../_state/provider'
import { ProductsControls } from './controls'
import { ProductsContent } from './content'
import { Icon } from './icons'

const { __ } = wp.i18n

function BlockProducts() {
  return {
    title: __('Products', wpshopify.misc.textdomain),
    description: __(
      'This block displays one or more Shopify products in a grid layout.',
      wpshopify.misc.textdomain
    ),
    category: 'wpshopify-products',
    icon: Icon,
    attributes: {
      payloadSettingsId: {
        type: 'string'
      },
      defaultPayloadSettings: {
        type: 'object',
        default: underscoreToCamel(wpshopify.settings.products)
      }
    },
    edit: props => {
      return (
        <BlockProvider options={underscoreToCamel(wpshopify)} blockProps={props}>
          <ProductsControls />
          <ProductsContent />
        </BlockProvider>
      )
    },
    save: props => {
      console.log('props', props)

      return <RootElement payloadSettingsId={props.attributes.payloadSettingsId} />
    }
  }
}

function registerBlockProducts() {
  wp.blocks.registerBlockType('wpshopify/products', BlockProducts())
}

export { registerBlockProducts }