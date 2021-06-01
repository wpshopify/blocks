/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { useBlockDispatch } from '../../_state/hooks';

function SortBy({ sortBy, isLoading, collection }) {
  const { SelectControl, Spinner, Notice } = wp.components;
  const { useState } = wp.element;
  const [badSort, setBadSort] = useState(false);
  const dispatch = useBlockDispatch();

  const spinnerStyles = css`
    position: absolute;
    top: 27px;
    right: 0px;
    margin: 0;
    background: white;
    padding: 0px 8px;

    .components-spinner {
      margin: 0;
    }
  `;

  const filterWrapCSS = css`
    position: relative;
  `;

  const badSortCSS = css`
    margin-bottom: 2em;
    margin-top: -1em;
  `;

  const options = [
    { label: wp.i18n.__('Title', 'wpshopify'), value: 'title' },
    { label: wp.i18n.__('Vendor', 'wpshopify'), value: 'vendor' },
    { label: wp.i18n.__('ID', 'wpshopify'), value: 'id' },
    { label: wp.i18n.__('Price', 'wpshopify'), value: 'price' },
    { label: wp.i18n.__('Best Selling', 'wpshopify'), value: 'best_selling' },
    { label: wp.i18n.__('Product Type', 'wpshopify'), value: 'product_type' },
    { label: wp.i18n.__('Created At', 'wpshopify'), value: 'created_at' },
    { label: wp.i18n.__('Updated At', 'wpshopify'), value: 'updated_at' },
    {
      label: wp.i18n.__('Collection Default (Collection only)', 'wpshopify'),
      value: 'collection_default',
    },
    { label: wp.i18n.__('Manual (Collection only)', 'wpshopify'), value: 'manual' },
  ];

  function onChange(newVal) {
    if ((!collection && newVal === 'collection_default') || newVal === 'manual') {
      setBadSort(true);
    } else {
      setBadSort(false);
    }

    dispatch({ type: 'SET_IS_LOADING', payload: true });
    dispatch({ type: 'UPDATE_SETTING', payload: { key: 'sortBy', value: newVal } });
  }

  return (
    <div css={filterWrapCSS}>
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
        value={sortBy}
        options={options}
        onChange={onChange}
      />

      {badSort && (
        <Notice status='warning' isDismissible={false} css={badSortCSS}>
          {wp.i18n.__('Warning: You must filter products by a Collection first!', 'wpshopify')}
        </Notice>
      )}
    </div>
  );
}

export default wp.element.memo(SortBy);
