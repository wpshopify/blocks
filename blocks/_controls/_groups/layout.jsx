import Excludes from '../excludes';
import AlignHeight from '../align-height';
import ItemsPerRow from '../items-per-row';

function LayoutControls({ settings }) {
  return (
    <>
      <ItemsPerRow itemsPerRow={settings.itemsPerRow} />
      <Excludes excludes={settings.excludes} />
      <AlignHeight height={settings.alignHeight} />
    </>
  );
}

export default wp.element.memo(LayoutControls);
