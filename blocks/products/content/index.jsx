import { Products } from '/Users/andrew/www/devil/devilbox-new/data/www/wpshopify-components'
import { BlockContent } from '../../_content'

function ProductsContent() {
  console.log('<ProductsContent> :: Render First')

  return (
    <BlockContent>
      <Products />
    </BlockContent>
  )
}
export { ProductsContent }
