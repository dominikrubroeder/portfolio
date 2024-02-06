import { Tool } from '@/interfaces';
import SliderItem from '@/components/SliderItem';

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
      showActions
      isFirstItemInList={isFirstItemInList}
    />
  );
}
