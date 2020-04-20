import {
  RootElement,
  underscoreToCamel,
} from '/Users/andrew/www/devil/devilbox-new/data/www/wpshopify-components'

import { BlockProvider } from '../_state/provider'
import { BuyButtonControls } from './controls'
import { ProductsContent } from '../products/content'
import { Icon } from '../_icons'

const { __ } = wp.i18n

function customDefaultPayloadSettings(payloadSettings) {
  var copyPayloadSettings = payloadSettings

  copyPayloadSettings.limit = 1
  copyPayloadSettings.itemsPerRow = 1
  copyPayloadSettings.excludes = ['title', 'images', 'description', 'pricing']
  copyPayloadSettings.linkTo = 'none'

  return copyPayloadSettings
}

function BlockBuyButton() {
  return {
    title: __('Buy Button', wpshopify.misc.textdomain),
    description: __(
      'This block displays a simple "buy button" without the product title, images, or price.',
      wpshopify.misc.textdomain
    ),
    category: 'wpshopify-products',
    icon: Icon,
    attributes: {
      payloadSettingsId: {
        type: 'string',
      },
      defaultPayloadSettings: {
        type: 'object',
        default: customDefaultPayloadSettings(underscoreToCamel(wpshopify.settings.products)),
      },
    },
    edit: (props) => {
      return (
        <BlockProvider options={underscoreToCamel(wpshopify)} blockProps={props}>
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
