'use client';

import { Toggle } from '@/components/ui/toggle';

import { useTheme } from '@/components/feature/theme';

export function ThemeWinterToggle() {
  const { setIsEventWinterEnabled, isEventWinterEnabled } = useTheme();

  return (
    <Toggle
      isEnabled={isEventWinterEnabled}
      onClick={() => setIsEventWinterEnabled(!isEventWinterEnabled)}
    />
  );
}
