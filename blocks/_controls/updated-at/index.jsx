function UpdatedAt({ state, dispatch }) {
  const { useState } = wp.element;
  const { TextControl } = wp.components;
  const [val, setVal] = useState(state.payloadSettings.updatedAt);

  function onChange(newVal) {
    setVal(newVal);
    dispatch({ type: 'UPDATE_SETTING', payload: { key: 'updatedAt', value: newVal } });
  }

  return (
    <TextControl
      label={wp.i18n.__('Updated At', 'wpshopify')}
      help={wp.i18n.__('Match product updated at', 'wpshopify')}
      value={val}
      onChange={onChange}
    />
  );
}

export default wp.element.memo(UpdatedAt);
