import without from 'lodash/without';
/** @jsx jsx */
import { jsx, css } from '@emotion/react';

function Excludes({ state, dispatch }) {
  const { useEffect, useState, useRef } = wp.element;
  const { CheckboxControl, BaseControl } = wp.components;
  const [excludesState, setExcludesState] = useState(state.payloadSettings.excludes);
  const isFirstRender = useRef(true);

  const excludeCSS = css`
    && {
      margin-bottom: 3px;
    }
  `;

  function inState(excludesState, type) {
    if (excludesState.includes(type)) {
      return true;
    } else {
      return false;
    }
  }

  function onChange(isChecked, type) {
    if (isChecked && inState(excludesState, type)) {
      return;
    }

    if (isChecked) {
      setExcludesState(excludesState.concat([type]));
    } else {
      var asfokasod = without(excludesState, type);

      setExcludesState(asfokasod);
    }
  }

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    dispatch({ type: 'UPDATE_SETTING', payload: { key: 'excludes', value: excludesState } });
  }, [excludesState]);

  //   useEffect(() => {
  //     if (isFirstRender.current) {
  //       isFirstRender.current = false
  //       return
  //     }

  //     setExcludesState(state.payloadSettings.excludes)
  //   }, [state.payloadSettings.excludes])

  function Title() {
    return (
      <CheckboxControl
        label={wp.i18n.__('Title', 'wpshopify')}
        checked={inState(excludesState, 'title')}
        onChange={(isChecked) => onChange(isChecked, 'title')}
      />
    );
  }

  function Description() {
    return (
      <CheckboxControl
        label={wp.i18n.__('Description', 'wpshopify')}
        checked={inState(excludesState, 'description')}
        onChange={(isChecked) => onChange(isChecked, 'description')}
      />
    );
  }

  function Images() {
    return (
      <CheckboxControl
        label={wp.i18n.__('Images', 'wpshopify')}
        checked={inState(excludesState, 'images')}
        onChange={(isChecked) => onChange(isChecked, 'images')}
      />
    );
  }

  function Pricing() {
    return (
      <CheckboxControl
        label={wp.i18n.__('Pricing', 'wpshopify')}
        checked={inState(excludesState, 'pricing')}
        onChange={(isChecked) => onChange(isChecked, 'pricing')}
      />
    );
  }

  function BuyButton() {
    return (
      <CheckboxControl
        label={wp.i18n.__('Buy Button', 'wpshopify')}
        checked={inState(excludesState, 'buy-button')}
        onChange={(isChecked) => onChange(isChecked, 'buy-button')}
      />
    );
  }

  return (
    <>
      <BaseControl css={excludeCSS} label={wp.i18n.__('Exclude from layout: ', 'wpshopify')} />
      <Title />
      <Description />
      <Images />
      <Pricing />
      <BuyButton />
    </>
  );
}

export { Excludes };
