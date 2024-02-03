import { Social } from '@/interfaces';
import SliderItem from '@/components/SliderItem';

export default function Social({ social }: { social: Social }) {
  return <SliderItem sliderItem={social} />;
}
