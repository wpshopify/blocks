import { RootElement } from '/Users/arobbins/www/_devilbox/devilbox/data/www/wpshopify-components';

function BlockRoot({ attributes }) {
  return (
    <RootElement
      payloadSettingsId={attributes.payloadSettingsId}
      componentId={attributes.clientId}
    />
  );
}

export default BlockRoot;
