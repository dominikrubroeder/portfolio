'use client';

import { Select } from '@/components/atoms/select';
import { useTheme } from '@/components/organisms/theme';

const options = [
  { value: 'light', label: 'Light' },
  { value: 'dark', label: 'Dark' },
  {
    value: 'auto',
    label: 'Auto'
  }
];

export function AppearanceThemeSetting() {
  const { appearance } = useTheme();

  return <Select initialValue={appearance} options={options} />;
}
