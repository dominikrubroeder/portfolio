'use client';

import { useEffect, useRef, useState } from 'react';

import { useTheme } from '@/components/feature/theme';

/** Tells screen reader users what changed, because the result may be out of view behind the drawer. */
export function ThemeSettingsAnnouncer() {
  const {
    theme,
    themeAppearance,
    themeColor,
    themeFontSize,
    themeRadius,
    themeContainerWidth,
    themeAnimationSettings
  } = useTheme();
  const [message, setMessage] = useState('');
  const previous = useRef<Record<string, string> | null>(null);

  useEffect(() => {
    const current: Record<string, string> = {
      Theme: theme.value,
      Appearance: String(themeAppearance),
      Color: String(themeColor),
      'Font size': String(themeFontSize),
      Radius: String(themeRadius),
      'Container width': String(themeContainerWidth),
      Animations: themeAnimationSettings.isEnabled ? 'on' : 'off'
    };
    const before = previous.current;

    previous.current = current;

    if (!before) return;

    const changed = Object.keys(current).find(
      (key) => current[key] !== before[key]
    );

    if (changed) setMessage(`${changed}: ${current[changed]}`);
  }, [
    theme,
    themeAppearance,
    themeColor,
    themeFontSize,
    themeRadius,
    themeContainerWidth,
    themeAnimationSettings
  ]);

  return (
    <div role="status" aria-live="polite" className="sr-only">
      {message}
    </div>
  );
}
