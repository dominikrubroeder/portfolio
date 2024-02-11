import { Technology } from '@/interfaces';
import SliderItem from '@/components/slider-item';

export default function Technology({
  technology,
  isFirstItemInList
}: {
  technology: Technology;
  isFirstItemInList?: boolean;
}) {
  return (
    <SliderItem
      sliderItem={technology}
      showActions
      isFirstItemInList={isFirstItemInList}
    />
  );
}
