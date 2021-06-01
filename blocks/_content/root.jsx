import { RootElement } from '/Users/andrew/www/devil/devilbox-new/data/www/wpshopify-components';

function BlockRoot({ attributes }) {
  return (
    <RootElement
      payloadSettingsId={attributes.payloadSettingsId}
      componentId={attributes.clientId}
    />
  );
}

export default BlockRoot;
