import ProductsLinkTarget from '../products-link-target';
import ProductsLinkTo from '../products-link-to';

function GeneralControls({ settings }) {
  return (
    <>
      <ProductsLinkTo linkTo={settings.linkTo} />
      <ProductsLinkTarget linkTarget={settings.linkTarget} />
    </>
  );
}

export default wp.element.memo(GeneralControls);
