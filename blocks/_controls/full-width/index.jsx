function FullWidth({ state, dispatch }) {
  const { ToggleControl } = wp.components;

  function onChange(isChecked) {
    dispatch({
      type: 'UPDATE_SETTING',
      payload: { key: 'fullWidth', value: isChecked },
    });
  }

  return (
    <ToggleControl
      label={wp.i18n.__('Full width?', 'wpshopify')}
      checked={state.payloadSettings.fullWidth}
      onChange={onChange}
    />
  );
}

export default wp.element.memo(FullWidth);
