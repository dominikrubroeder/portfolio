import { Technology } from '@/interfaces';
import SliderItem from '@/components/SliderItem';

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
