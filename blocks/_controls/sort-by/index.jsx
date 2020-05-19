/** @jsx jsx */
import { jsx, css } from '@emotion/core'

function SortBy({ state, dispatch }) {
  const { SelectControl, Spinner } = wp.components
  const { useState, useEffect } = wp.element
  const [isLoading, setIsLoading] = useState(false)

  const spinnerStyles = css`
    position: relative;
    top: -3px;
    right: 6px;
    margin: 0;

    .components-spinner {
      margin: 0;
    }
  `

  const options = [
    { label: wp.i18n.__('Title', 'wpshopify'), value: 'title' },
    { label: wp.i18n.__('Vendor', 'wpshopify'), value: 'vendor' },
    { label: wp.i18n.__('ID', 'wpshopify'), value: 'id' },
    { label: wp.i18n.__('Price', 'wpshopify'), value: 'price' },
    { label: wp.i18n.__('Best selling', 'wpshopify'), value: 'best_selling' },
    { label: wp.i18n.__('Product type', 'wpshopify'), value: 'product_type' },
    { label: wp.i18n.__('Created at', 'wpshopify'), value: 'created_at' },
    { label: wp.i18n.__('Updated at', 'wpshopify'), value: 'updated_at' },
  ]

  function onChange(newVal) {
    setIsLoading(true)
    dispatch({ type: 'SET_IS_LOADING', payload: true })
    dispatch({ type: 'UPDATE_SETTING', payload: { key: 'sortBy', value: newVal } })
    dispatch({ type: 'UPDATE_QUERY_PARAMS', payload: { sortKey: newVal } })
  }

  useEffect(() => {
    if (!state.isLoading) {
      setIsLoading(false)
    }
  }, [state.isLoading])

  return (
    <>
      {isLoading && (
        <div css={spinnerStyles}>
          <Spinner />
        </div>
      )}
      <SelectControl
        label={wp.i18n.__('Sort by', 'wpshopify')}
        help={wp.i18n.__(
          'Note: sorting by price will take all variant prices into consideration',
          'wpshopify'
        )}
        value={state.payloadSettings.sortBy}
        options={options}
        onChange={onChange}
      />
    </>
  )
}

export { SortBy }
