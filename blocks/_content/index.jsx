import {
  Items,
  Shop,
  ProductPlaceholder,
  Notices,
} from '/Users/andrew/www/devil/devilbox-new/data/www/wpshopify-components';
import {
  fetchNewItems,
  encodePayloadSettings,
} from '/Users/andrew/www/devil/devilbox-new/data/www/wpshopify-api';

import { useBlockState, useBlockDispatch } from '../_state/hooks';

function BlockContent({ children }) {
  const { useEffect, useState } = wp.element;

  const state = useBlockState();
  const dispatch = useBlockDispatch();
  const [isBootstrapping, setIsBootstrapping] = useState(true);

  useEffect(() => {
    state.blockProps.setAttributes({
      payloadSettingsId: encodePayloadSettings(state.payloadSettings),
    });
  }, [state.payloadSettings]);

  useEffect(() => {
    dispatch({ type: 'SET_IS_LOADING', payload: true });

    fetchNewItems(state)
      .then(function (newItems) {
        dispatch({ type: 'SET_IS_LOADING', payload: false });

        setIsBootstrapping(false);

        if (newItems.length) {
          dispatch({
            type: 'SET_PAYLOAD',
            payload: newItems,
          });
        } else {
          dispatch({
            type: 'SET_PAYLOAD',
            payload: [],
          });
          dispatch({
            type: 'UPDATE_NOTICES',
            payload: {
              type: 'info',
              message: 'No products found',
            },
          });
        }
      })
      .catch((error) => {
        setIsBootstrapping(false);

        dispatch({ type: 'SET_IS_LOADING', payload: false });

        dispatch({
          type: 'UPDATE_NOTICES',
          payload: {
            type: 'error',
            message: error,
          },
        });
      });
  }, [state.queryParams]);

  return isBootstrapping ? (
    <ProductPlaceholder />
  ) : state.payload.length ? (
    <Shop options={{ isCartReady: true }}>
      <Items
        options={[
          {
            componentElement: state.componentElement,
            componentType: state.componentType,
            componentId: state.blockProps.clientId,
            payloadSettings: state.payloadSettings,
          },
        ]}
        payloadSettings={state.payloadSettings}
        payload={state.payload}
        customQueryParams={state.queryParams}
        isParentLoading={state.isLoading}>
        {children}
      </Items>
    </Shop>
  ) : (
    <Notices notices={state.notices} noticeGroup='block' />
  );
}
export default BlockContent;
