'use client';

import { Select } from '@/components/ui/select';
import type { SelectOption } from '@/components/ui/select';

import {
  getThemeDefinition,
  useThemeActions,
  useThemeSetting
} from '@/components/feature/theme';
import type { ThemeRadius } from '@/components/feature/theme';

const THEME_RADIUS_OPTIONS: SelectOption[] = [
  { key: 'none', value: 'None' },
  { key: 'sm', value: 'Small' },
  { key: 'md', value: 'Medium' },
  { key: 'lg', value: 'Large' }
];

export function ThemeRadiusSetting() {
  const theme = useThemeSetting('theme');
  const themeRadius = useThemeSetting('themeRadius');
  const defaultRadius = getThemeDefinition(theme.key).defaults.radius;
  const { setThemeRadius } = useThemeActions();

  return (
    <Select
      trigger={{ variant: 'ghost-foreground' }}
      value={themeRadius}
      label="Radius"
      placeholder="Select a radius"
      options={THEME_RADIUS_OPTIONS.map((option) => ({
        ...option,
        isDefault: option.key === defaultRadius
      }))}
      onValueChange={(option) => setThemeRadius(option.key as ThemeRadius)}
    />
  );
}
