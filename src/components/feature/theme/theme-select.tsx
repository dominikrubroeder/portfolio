'use client';

import { Select } from '@/components/ui/select';

import {
  THEME_OPTIONS,
  useThemeActions,
  useThemeSetting
} from '@/components/feature/theme';
import type { ThemeOption } from '@/components/feature/theme';

export function ThemeSelect() {
  const theme = useThemeSetting('theme');
  const { setTheme } = useThemeActions();

  return (
    <Select
      trigger={{ variant: 'contained-primary' }}
      value={theme.key}
      label="Theme"
      placeholder="Select a theme"
      options={THEME_OPTIONS}
      onValueChange={(themeOption) => setTheme(themeOption as ThemeOption)}
    />
  );
}
