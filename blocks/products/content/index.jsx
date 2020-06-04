import { Products } from '/Users/andrew/www/devil/devilbox-new/data/www/wpshopify-components'
import { BlockContent } from '../../_content'

function ProductsContent({ isBootstrapping }) {
  return (
    <BlockContent isBootstrapping={isBootstrapping}>
      <Products />
    </BlockContent>
  )
}

export default wp.element.memo(ProductsContent)
