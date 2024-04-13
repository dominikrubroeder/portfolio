import { Tool } from '@/interfaces';
import SliderItem from '@/components/slider-item';

export default function Tool({
  tool,
  isFirstItemInList
}: {
  tool: Tool;
  isFirstItemInList?: boolean;
}) {
  return (
    <SliderItem
      sliderItem={tool}
      type="Tool"
      showActions
      isFirstItemInList={isFirstItemInList}
    />
  );
}
