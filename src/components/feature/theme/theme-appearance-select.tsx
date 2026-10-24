'use client';

import { MoonIcon, SparklesIcon, SunIcon } from '@heroicons/react/24/solid';

import { Select } from '@/components/ui/select';
import type { SelectOption } from '@/components/ui/select';

import { useThemeActions, useThemeSetting } from '@/components/feature/theme';
import type { ThemeAppearance } from '@/components/feature/theme';

const THEME_APPEARANCE_OPTIONS: SelectOption[] = [
  { key: 'light', value: 'Light', icon: <SunIcon className="size-5" /> },
  { key: 'dark', value: 'Dark', icon: <MoonIcon className="size-5" /> },
  { key: 'system', value: 'Auto', icon: <SparklesIcon className="size-5" /> }
];

export function ThemeAppearanceSelect() {
  const themeAppearance = useThemeSetting('themeAppearance');
  const { setThemeAppearance } = useThemeActions();

  return (
    <Select
      trigger={{ variant: 'ghost-foreground' }}
      value={themeAppearance ?? 'system'}
      label="Appearance"
      placeholder="Select an appearance"
      options={THEME_APPEARANCE_OPTIONS}
      onValueChange={(option) =>
        setThemeAppearance(option.key as ThemeAppearance)
      }
    />
  );
}
