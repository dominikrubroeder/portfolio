import { Technology as TechnologyType } from '@/interfaces';
import SliderItem from '@/components/atoms/slider-item';

export default function Technology({
  technology,
  isFirstItemInList
}: {
  technology: TechnologyType;
  isFirstItemInList?: boolean;
}) {
  return (
    <SliderItem
      sliderItem={technology}
      type="Technology"
      showActions
      isFirstItemInList={isFirstItemInList}
    />
  );
}
