'use client';

import {
  THEME_OPTION_DEFAULT,
  THEME_OPTIONS,
  ThemeOption,
  useTheme
} from '@/components/organisms/theme';
import { Select } from '@/components/atoms/select';

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
