import React from 'react';
import Switch from './ui/Switch';
import { themeSwitchData } from '../data';

const ThemeSwitch: React.FC = () => {
  return <Switch data={themeSwitchData} as="theme-switch" />;
};

export default ThemeSwitch;
