'use client';

import { Toggle } from '@/components/atoms/toggle';
import { useTheme } from '@/components/organisms/theme';

export function ThemeWinterToggle() {
  const { setIsEventWinterEnabled, isEventWinterEnabled } = useTheme();

  return (
    <Toggle
      enabled={isEventWinterEnabled}
      onClick={() => setIsEventWinterEnabled(!isEventWinterEnabled)}
    />
  );
}
