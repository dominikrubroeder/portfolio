'use client';

import { Toggle } from '@/components/ui/toggle';

import { useTheme } from '@/components/feature/theme';

export function ThemeAnimationEnabledToggle() {
  const { themeAnimationSettings, setThemeAnimationSettings } = useTheme();

  return (
    <Toggle
      onClick={() =>
        setThemeAnimationSettings((prevState) => {
          return { ...prevState, isEnabled: !prevState.isEnabled };
        })
      }
      isEnabled={themeAnimationSettings.isEnabled}
    />
  );
}
