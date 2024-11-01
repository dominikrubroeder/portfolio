import { Social } from '@/interfaces';
import SliderItem from '@/components/slider-item';

export default function Social({ social }: { social: Social }) {
  return <SliderItem sliderItem={social} type="Social" />;
}
