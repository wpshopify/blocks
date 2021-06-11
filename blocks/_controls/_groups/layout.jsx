import Excludes from '../excludes';
import AlignHeight from '../align-height';
import ItemsPerRow from '../items-per-row';
import Carousel from '../carousel';
import CarouselDots from '../carousel-dots';
import CarouselInfinite from '../carousel-infinite';
import CarouselSpeed from '../carousel-speed';
import CarouselSlidesToShow from '../carousel-slides-to-show';
import CarouselSlidesToScroll from '../carousel-slides-to-scroll';

function LayoutControls({ settings }) {
  return (
    <>
      <ItemsPerRow itemsPerRow={settings.itemsPerRow} />
      <Excludes excludes={settings.excludes} />
      <AlignHeight height={settings.alignHeight} />
      <Carousel carousel={settings.carousel} />
      {settings.carousel && <CarouselDots dots={settings.carouselDots} />}
      {settings.carousel && <CarouselInfinite infinite={settings.carouselInfinite} />}
      {settings.carousel && <CarouselSpeed speed={settings.carouselSpeed} />}
      {settings.carousel && <CarouselSlidesToShow slides={settings.carouselSlidesToShow} />}
      {settings.carousel && <CarouselSlidesToScroll slides={settings.carouselSlidesToScroll} />}
    </>
  );
}

export default wp.element.memo(LayoutControls);
