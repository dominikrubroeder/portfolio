'use client';

import { Toggle } from '@/components/ui/toggle';

import { useThemeActions, useThemeSetting } from '@/components/feature/theme';

export function ThemeWinterToggle() {
  const isEventWinterEnabled = useThemeSetting('isEventWinterEnabled');
  const { setIsEventWinterEnabled } = useThemeActions();

  return (
    <Toggle
      isEnabled={isEventWinterEnabled}
      onClick={() => setIsEventWinterEnabled(!isEventWinterEnabled)}
    />
  );
}
