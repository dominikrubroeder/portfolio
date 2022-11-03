import React from 'react';
import Switch from './ui/Switch';
import { themeSwitchData } from '../data';

const ThemeSwitch: React.FC = () => {
  return (
    <Switch
      data={themeSwitchData}
      as="theme-switch"
      className="mx-auto mt-4 w-min"
    />
  );
};

export default ThemeSwitch;
