'use client';

import { Select } from '@/components/ui/select';
import type { SelectOption } from '@/components/ui/select';

import { useThemeActions, useThemeSetting } from '@/components/feature/theme';
import type { ThemeContainerWidth } from '@/components/feature/theme';

const THEME_SPACING_CONTAINER_WIDTH_OPTIONS: SelectOption[] = [
  { key: 'default', value: 'Default' },
  { key: 'wide', value: 'Wide (64 rem)' },
  { key: 'full', value: 'Full (90 rem)' }
];

export function ThemeSpacingContainerWidthSetting() {
  const themeContainerWidth = useThemeSetting('themeContainerWidth');
  const { setThemeContainerWidth } = useThemeActions();

  return (
    <Select
      trigger={{ variant: 'ghost-foreground' }}
      value={themeContainerWidth}
      label="Container width"
      placeholder="Select a width"
      options={THEME_SPACING_CONTAINER_WIDTH_OPTIONS}
      onValueChange={(option) =>
        setThemeContainerWidth(option.key as ThemeContainerWidth)
      }
    />
  );
}
