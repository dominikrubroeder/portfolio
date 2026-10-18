'use client';

import { Toggle } from '@/components/ui/toggle';

import { useThemeActions, useThemeSetting } from '@/components/feature/theme';

export function ThemeAnimationEnabledToggle() {
  const themeAnimationSettings = useThemeSetting('themeAnimationSettings');
  const { setThemeAnimationSettings } = useThemeActions();

  return (
    <Toggle
      ariaLabel="Enable animations"
      onClick={() =>
        setThemeAnimationSettings((prevState) => {
          return { ...prevState, isEnabled: !prevState.isEnabled };
        })
      }
      isEnabled={themeAnimationSettings.isEnabled}
    />
  );
}
