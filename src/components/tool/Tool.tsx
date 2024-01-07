import { Tool } from '@/lib/interfaces';
import SliderItem from '@/components/SliderItem';

export default function Tool({ tool }: { tool: Tool }) {
  return <SliderItem sliderItem={tool} showActions />;
}
