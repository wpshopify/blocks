import { defaultColors } from '../_common';
import { useBlockDispatch } from '../../_state/hooks';

function TitleColor({ titleColor }) {
  const { BaseControl, ColorPalette } = wp.components;
  const dispatch = useBlockDispatch();

  function onChange(newColor) {
    dispatch({ type: 'UPDATE_SETTING', payload: { key: 'titleColor', value: newColor } });
  }

  return (
    <BaseControl label={wp.i18n.__('Title Color:', 'wpshopify')}>
      <ColorPalette colors={defaultColors()} value={titleColor} onChange={onChange} />
    </BaseControl>
  );
}

export default wp.element.memo(TitleColor);
