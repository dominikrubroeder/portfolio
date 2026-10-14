'use client';

import { Select } from '@/components/ui/select';

import {
  THEME_OPTION_DEFAULT,
  THEME_OPTIONS,
  useTheme
} from '@/components/feature/theme';
import type { ThemeOption } from '@/components/feature/theme';

export function ThemeSelect() {
  const { theme, setTheme } = useTheme();

  return (
    <Select
      trigger={{ variant: 'contained-primary' }}
      initialValue={
        THEME_OPTIONS.find((availableTheme) => availableTheme.key === theme.key)
          ?.value || THEME_OPTION_DEFAULT.value
      }
      placeholder="Select a theme"
      options={THEME_OPTIONS}
      onValueChange={(themeOption) => setTheme(themeOption as ThemeOption)}
    />
  );
}
