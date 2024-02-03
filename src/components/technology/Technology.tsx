import { Technology } from '@/interfaces';
import SliderItem from '@/components/SliderItem';

export default function Technology({ technology }: { technology: Technology }) {
  return <SliderItem sliderItem={technology} showActions />;
}
