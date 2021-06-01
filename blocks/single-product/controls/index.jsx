import FilteringControls from '../../_controls/_groups/filtering';
import GeneralControls from '../../_controls/_groups/general';
import LayoutControls from '../../_controls/_groups/layout';
import TitleControls from '../../_controls/_groups/title';
import DescriptionControls from '../../_controls/_groups/description';
import PricingControls from '../../_controls/_groups/pricing';
import ImagesControls from '../../_controls/_groups/images';
import ButtonControls from '../../_controls/_groups/buy-button';
import CheckoutControls from '../../_controls/_groups/checkout';
import BlockControls from '../../_controls';
import { useBlockState } from '../../_state/hooks';

function SingleProductControls() {
  const { PanelBody } = wp.components;

  const { payloadSettings: settings } = useBlockState();

  return (
    <BlockControls>
      <PanelBody
        title={wp.i18n.__('Filtering', 'wpshopify')}
        initialOpen={true}
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
        title={wp.i18n.__('Layout', 'wpshopify')}
        initialOpen={false}
        className='wps-panel-body'>
        <LayoutControls settings={settings} />
      </PanelBody>

      <PanelBody
        title={wp.i18n.__('Title', 'wpshopify')}
        initialOpen={false}
        className='wps-panel-body'>
        <TitleControls settings={settings} />
      </PanelBody>

      <PanelBody
        title={wp.i18n.__('Description', 'wpshopify')}
        initialOpen={false}
        className='wps-panel-body'>
        <DescriptionControls settings={settings} />
      </PanelBody>

      <PanelBody
        title={wp.i18n.__('Pricing', 'wpshopify')}
        initialOpen={false}
        className='wps-panel-body'>
        <PricingControls settings={settings} />
      </PanelBody>

      <PanelBody
        title={wp.i18n.__('Images', 'wpshopify')}
        initialOpen={false}
        className='wps-panel-body'>
        <ImagesControls settings={settings} />
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

export default SingleProductControls;
