import AddToCartButtonColor from '../add-to-cart-button-color';
import AddToCartButtonText from '../add-to-cart-button-text';
import VariantButtonColor from '../variant-button-color';
import HideQuantity from '../hide-quantity';
import ShowQuantityLabel from '../show-quantity-label';
import QuantityLabelText from '../quantity-label-text';
import MinQuantity from '../min-quantity';
import MaxQuantity from '../max-quantity';
import VariantStyle from '../variant-style';

function BuyButtonControls({ settings }) {
  return (
    <>
      <AddToCartButtonColor color={settings.addToCartButtonColor} />
      <AddToCartButtonText text={settings.addToCartButtonText} />
      <VariantButtonColor color={settings.variantButtonColor} style={settings.variantStyle} />
      <HideQuantity hide={settings.hideQuantity} />
      <ShowQuantityLabel show={settings.showQuantityLabel} />
      <QuantityLabelText
        text={settings.quantityLabelText}
        showQuantityLabel={settings.showQuantityLabel}
      />
      <MinQuantity min={settings.minQuantity} />
      <MaxQuantity max={settings.maxQuantity} />
      <VariantStyle style={settings.variantStyle} />
    </>
  );
}

export default wp.element.memo(BuyButtonControls);
