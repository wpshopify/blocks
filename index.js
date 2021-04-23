import { Icon } from './blocks/_icons';
export { registerBlockProducts } from './blocks/products';
export { registerBlockSingleProduct } from './blocks/single-product';
export { registerBlockBuyButton } from './blocks/buy-button';

wp.blocks.updateCategory('wpshopify-products', { icon: Icon });
