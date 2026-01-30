'use client';

import { ThemeOption, useTheme } from '@/components/organisms/theme';
import { Select, SelectOption } from '@/components/atoms/select';

const THEME_SPACING_CONTAINER_WIDTH_OPTIONS: SelectOption[] = [
  {
    key: '768',
    value: '48rem (768 px)'
  },
  {
    key: '1024',
    value: '64rem (1024 px)'
  },
  {
    key: '1440',
    value: '90rem (1440 px)'
  }
];

export function ThemeSpacingContainerWidthSetting() {
  const { setTheme } = useTheme();

  return (
    <Select
      trigger={{ variant: 'ghost-foreground' }}
      initialValue={THEME_SPACING_CONTAINER_WIDTH_OPTIONS[0].value}
      placeholder="Select a width"
      options={THEME_SPACING_CONTAINER_WIDTH_OPTIONS}
      onValueChangeAction={(themeOption) =>
        setTheme(themeOption as ThemeOption)
      }
    />
  );
}
