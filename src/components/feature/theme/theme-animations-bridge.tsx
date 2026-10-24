'use client';

import type { ReactNode } from 'react';

import { AnimationsProvider } from '@/components/ui/animate';

import { useThemeSetting } from './theme-hooks';

/**
 * Hands the animation setting to `ui` components, which must not import `feature`. It is the only
 * subscriber, so toggling animations does not re-render `ThemeProvider` itself.
 */
export function ThemeAnimationsBridge({ children }: { children: ReactNode }) {
  const { isEnabled } = useThemeSetting('themeAnimationSettings');

  return (
    <AnimationsProvider enabled={isEnabled}>{children}</AnimationsProvider>
  );
}
