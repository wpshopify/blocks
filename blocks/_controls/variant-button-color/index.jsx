import { useBlockDispatch } from '../../_state/hooks';
import { defaultColors } from '../_common';

function VariantButtonColor({ color, style }) {
  const { BaseControl, ColorPalette } = wp.components;
  const dispatch = useBlockDispatch();

  function onChange(newColor) {
    dispatch({ type: 'UPDATE_SETTING', payload: { key: 'variantButtonColor', value: newColor } });
  }

  return (
    style === 'dropdown' && (
      <BaseControl
        label={wp.i18n.__('Variant button color:', 'wpshopify')}
        className='color-variants'>
        <ColorPalette colors={defaultColors()} value={color} onChange={onChange} />
      </BaseControl>
    )
  );
}

export default wp.element.memo(VariantButtonColor);
