import FilteringControls from '../../_controls/_groups/filtering';
import GeneralControls from '../../_controls/_groups/general';
import ButtonControls from '../../_controls/_groups/buy-button';
import CheckoutControls from '../../_controls/_groups/checkout';
import BlockControls from '../../_controls';
import { useBlockState } from '../../_state/hooks';

function BuyButtonControls() {
  const { PanelBody } = wp.components;

  const { payloadSettings: settings } = useBlockState();

  return (
    <BlockControls>
      <PanelBody
        title={wp.i18n.__('Filtering', 'wpshopify')}
        initialOpen={false}
        className='wps-panel-body'>
        <FilteringControls settings={settings} single={true} />
      </PanelBody>

      <PanelBody
        title={wp.i18n.__('General', 'wpshopify')}
        initialOpen={false}
        className='wps-panel-body'>
        <GeneralControls settings={settings} />
      </PanelBody>

      <PanelBody
        title={wp.i18n.__('Buy Button', 'wpshopify')}
        initialOpen={false}
        className='wps-panel-body'>
        <ButtonControls settings={settings} />
      </PanelBody>

      <PanelBody
        title={wp.i18n.__('Checkout', 'wpshopify')}
        initialOpen={false}
        className='wps-panel-body'>
        <CheckoutControls settings={settings} />
      </PanelBody>
    </BlockControls>
  );
}

export default BuyButtonControls;
