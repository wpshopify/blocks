import ShowPriceRange from '../show-price-range';
import ShowCompareAt from '../show-compare-at';

function PricingControls({ settings }) {
  return (
    <>
      <ShowPriceRange showPriceRange={settings.showPriceRange} />
      <ShowCompareAt showCompareAt={settings.showCompareAt} />
    </>
  );
}

export default wp.element.memo(PricingControls);
