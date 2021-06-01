import TextControlDebounced from '../_common/text-control-debounced';

function AddToCartButtonText({ text }) {
  return (
    <TextControlDebounced
      settingName='addToCartButtonText'
      label={wp.i18n.__('Add to cart button text', 'wpshopify')}
      state={text}
    />
  );
}

export default wp.element.memo(AddToCartButtonText);
