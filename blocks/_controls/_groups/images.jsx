import ShowFeaturedOnly from '../show-featured-only';
import ShowZoom from '../show-zoom';
import ImagesSizingToggle from '../images-sizing-toggle';
import ImagesSizingWidth from '../images-sizing-width';
import ImagesSizingHeight from '../images-sizing-height';
import ImagesSizingCrop from '../images-sizing-crop';
import ImagesSizingScale from '../images-sizing-scale';
import ThumbnailsImagesSizingToggle from '../thumbnails-images-sizing-toggle';
import ThumbnailsImagesSizingWidth from '../thumbnails-images-sizing-width';
import ThumbnailsImagesSizingHeight from '../thumbnails-images-sizing-height';
import ThumbnailsImagesSizingCrop from '../thumbnails-images-sizing-crop';
import ThumbnailsImagesSizingScale from '../thumbnails-images-sizing-scale';

function DescriptionControls({ settings }) {
  return (
    <>
      <ShowFeaturedOnly showFeaturedOnly={settings.showFeaturedOnly} />
      <ShowZoom showZoom={settings.showZoom} />
      <ImagesSizingToggle toggle={settings.imagesSizingToggle} />
      <ImagesSizingWidth width={settings.imagesSizingWidth} />
      <ImagesSizingHeight height={settings.imagesSizingHeight} />
      <ImagesSizingCrop crop={settings.imagesSizingCrop} />
      <ImagesSizingScale scale={settings.imagesSizingScale} />
      <ThumbnailsImagesSizingToggle toggle={settings.thumbnailImagesSizingToggle} />
      <ThumbnailsImagesSizingWidth width={settings.thumbnailImagesSizingWidth} />
      <ThumbnailsImagesSizingHeight height={settings.thumbnailImagesSizingHeight} />
      <ThumbnailsImagesSizingCrop crop={settings.thumbnailImagesSizingCrop} />
      <ThumbnailsImagesSizingScale scale={settings.thumbnailImagesSizingScale} />
    </>
  );
}

export default wp.element.memo(DescriptionControls);
