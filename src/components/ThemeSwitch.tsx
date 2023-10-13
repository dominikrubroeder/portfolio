import { themeSwitchData } from '../data';
import Switch from './ui/Switch';

export default function ThemeSwitch() {
  return <Switch data={themeSwitchData} as="theme-switch" />;
}
