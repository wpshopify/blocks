import { defaultColors } from '../_common';
import { useBlockDispatch } from '../../_state/hooks';

function DescriptionColor({ color }) {
  const { BaseControl, ColorPalette } = wp.components;
  const dispatch = useBlockDispatch();

  function onChange(newColor) {
    dispatch({ type: 'UPDATE_SETTING', payload: { key: 'descriptionColor', value: newColor } });
  }

  return (
    <BaseControl label={wp.i18n.__('Description Color:', 'wpshopify')}>
      <ColorPalette colors={defaultColors()} value={color} onChange={onChange} />
    </BaseControl>
  );
}

export default wp.element.memo(DescriptionColor);
