import Title from '../title';
import Collection from '../collection';
import Tag from '../tag';
import Vendor from '../vendor';
import ProductType from '../product-type';
import AvailableForSale from '../available-for-sale';
import Connective from '../connective';

function FilteringControls({ settings, single = false }) {
  return (
    <>
      <Title title={settings.title} isLoading={settings.isLoading} />
      <Collection state={settings.collection} />
      <Tag state={settings.tag} />
      <Vendor state={settings.vendor} />
      <ProductType state={settings.productType} />
      {!single && <AvailableForSale state={settings.availableForSale} />}
      {!single && <Connective state={settings.connective} />}
    </>
  );
}

export default wp.element.memo(FilteringControls);
