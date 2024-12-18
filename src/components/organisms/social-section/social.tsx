import { Social as SocialInterface } from '@/interfaces';
import SliderItem from '@/components/atoms/slider-item';

export default function Social({ social }: { social: SocialInterface }) {
  return <SliderItem sliderItem={social} type="Social" />;
}
