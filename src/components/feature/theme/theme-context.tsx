'use client';

import { useEffect } from 'react';
import type { ReactNode } from 'react';

import { ThemeAnimationsBridge } from './theme-animations-bridge';
import { useThemeSetting } from './theme-hooks';
import { initThemeStore, resolveSystemAppearance } from './theme-store';

/** Keeps `system` appearance in step with the OS while it is selected. */
function ThemeSystemAppearanceSync() {
  const themeAppearance = useThemeSetting('themeAppearance');
  const isInitialized = useThemeSetting('isInitialized');

  useEffect(() => {
    if (!isInitialized || themeAppearance !== 'system') return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', resolveSystemAppearance);
    return () =>
      mediaQuery.removeEventListener('change', resolveSystemAppearance);
  }, [themeAppearance, isInitialized]);

  return null;
}

/**
 * Restores the saved settings after hydration. It renders `children` unchanged, so no setting
 * change ever re-renders the page tree through this component.
 */
export function ThemeProvider({ children }: { children: ReactNode }) {
  useEffect(() => initThemeStore(), []);

  return (
    <>
      <ThemeSystemAppearanceSync />
      <ThemeAnimationsBridge>{children}</ThemeAnimationsBridge>
    </>
  );
}
