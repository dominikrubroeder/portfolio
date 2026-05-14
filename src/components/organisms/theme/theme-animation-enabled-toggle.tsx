'use client';

import { Toggle } from '@/components/atoms/toggle';
import { useTheme } from './theme-context';

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
