'use client';

import { Select } from '@/components/atoms/select';
import { useApp } from '@/components/organisms/app';

const options = [
  { value: 'light', label: 'Light' },
  { value: 'dark', label: 'Dark' },
  {
    value: 'auto',
    label: 'Auto'
  }
];

export function AppearanceThemeSetting() {
  const { appearance, setAppearance } = useApp();

  return <Select initialValue={appearance} options={options} />;
}
