'use client';

import { useSyncExternalStore } from 'react';

import type {
  ThemeActions,
  ThemeContextType,
  ThemeState
} from '@/components/feature/theme';
import {
  getThemeServerState,
  getThemeState,
  subscribeToTheme,
  themeActions
} from '@/components/feature/theme/theme-store';

/** Read one setting. Re-renders only when that setting changes. */
export function useThemeSetting<K extends keyof ThemeState>(
  key: K
): ThemeState[K] {
  return useSyncExternalStore(
    subscribeToTheme,
    () => getThemeState()[key],
    () => getThemeServerState()[key]
  );
}

/** The setters. The same object on every render. */
export function useThemeActions(): ThemeActions {
  return themeActions;
}

/** Every setting and setter. Re-renders on any change: prefer `useThemeSetting` in new code. */
export function useTheme(): ThemeContextType {
  const state = useSyncExternalStore(
    subscribeToTheme,
    getThemeState,
    getThemeServerState
  );

  return { ...state, ...themeActions };
}
