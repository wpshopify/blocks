import Icon from './blocks/_icons';
export { default as registerBlockProducts } from './blocks/products';
export { default as registerBlockSingleProduct } from './blocks/single-product';
export { default as registerBlockBuyButton } from './blocks/buy-button';

wp.blocks.updateCategory('wpshopify-products', { icon: Icon });
