import TextControlDebounced from '../_common/text-control-debounced';

function QuantityLabelText({ text, showQuantityLabel }) {
  return (
    showQuantityLabel && (
      <TextControlDebounced
        settingName='quantityLabelText'
        label={wp.i18n.__('Quantity label text', 'wpshopify')}
        state={text}
      />
    )
  );
}

export default wp.element.memo(QuantityLabelText);
