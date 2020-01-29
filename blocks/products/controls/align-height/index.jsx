// import React, { useContext } from "react"
// import { ToggleControl } from "@wordpress/components"
import { withStore } from '../../../_common'

const { useEffect, useState, useRef } = wp.element
const { ToggleControl } = wp.components

function AlignHeight({ state, dispatch }) {
  function onChange(isChecked) {
    //  builderDispatch({
    //    type: 'UPDATE_SETTING',
    //    payload: { key: 'alignHeight', value: isChecked }
    //  })
  }

  return (
    <ToggleControl
      label='Align height?'
      checked={state.payloadSettings.alignHeight}
      onChange={onChange}
    />
  )
}

export { AlignHeight }
