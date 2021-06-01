function InfiniteScrollOffset({ state, dispatch }) {
  const { useEffect, useState } = wp.element;
  const { TextControl } = wp.components;
  const [localVal, setLocalVal] = useState(state.payloadSettings.infiniteScrollOffset);

  function onChange(newVal) {
    setLocalVal(newVal);
    dispatch({ type: 'UPDATE_SETTING', payload: { key: 'infiniteScrollOffset', value: newVal } });
  }

  useEffect(() => {
    setLocalVal(state.payloadSettings.infiniteScrollOffset);
  }, [state.payloadSettings.infiniteScrollOffset]);

  return (
    <TextControl
      label={wp.i18n.__('Infinite Scroll Offset', 'wpshopify')}
      help={wp.i18n.__('Determines when infinite scroll begins', 'wpshopify')}
      value={localVal}
      onChange={onChange}
      type='number'
    />
  );
}

export default wp.element.memo(InfiniteScrollOffset);
