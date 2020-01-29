// import React, { useContext } from "react"
// import { CheckboxControl } from "@wordpress/components"
import { withStore } from '../../../_common'

// const {useEffect, useState, useRef } = wp.element;
const { CheckboxControl } = wp.components

function AvailableForSale({ state, dispatch }) {
  function onChange(newVal) {
    //  builderDispatch({
    //    type: 'UPDATE_SETTING',
    //    payload: { key: 'availableForSale', value: newVal }
    //  })
  }

  return (
    <CheckboxControl
      label='Available for sale'
      checked={state.payloadSettings.availableForSale}
      onChange={onChange}
    />
  )
}

export { AvailableForSale }
