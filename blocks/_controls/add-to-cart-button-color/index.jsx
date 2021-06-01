import { defaultColors } from '../_common';
import { useBlockDispatch } from '../../_state/hooks';

function AddToCartButtonColor({ color }) {
  const { BaseControl, ColorPalette } = wp.components;
  const dispatch = useBlockDispatch();

  function onChange(newColor) {
    dispatch({ type: 'UPDATE_SETTING', payload: { key: 'addToCartButtonColor', value: newColor } });
  }

  return (
    <BaseControl label={wp.i18n.__('Add to cart color:', 'wpshopify')}>
      <ColorPalette colors={defaultColors()} value={color} onChange={onChange} />
    </BaseControl>
  );
}

export default wp.element.memo(AddToCartButtonColor);
