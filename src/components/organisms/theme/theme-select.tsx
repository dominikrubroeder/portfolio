'use client';

import {
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
          ?.value ?? THEME_OPTIONS[0].value
      }
      placeholder="Select a theme"
      options={THEME_OPTIONS}
      onValueChangeAction={(themeOption) =>
        setTheme(themeOption as ThemeOption)
      }
    />
  );
}
