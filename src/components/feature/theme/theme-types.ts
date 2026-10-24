import type { Dispatch, SetStateAction } from 'react';

export type Theme = 'default' | 'wireframe';
export type ThemeOption = { key: Theme; value: string };
export type ThemeColor = 'violett' | 'blue' | 'orange' | 'foreground';
export type ThemeMode = 'design' | 'dev';
export type ThemeFontSize = 'sm' | 'md' | 'lg';
export type ThemeAppearance = 'light' | 'dark' | 'system';
export type ThemeRadius = 'none' | 'sm' | 'md' | 'lg';
export type ThemeContainerWidth = 'default' | 'wide' | 'full';
export type ThemeEvents = {
  isEventWinterEnabled: boolean;
};
export type ThemeAnimationDuration = 0 | 0.2 | 0.4 | 0.6 | 0.8;
export type ThemeAnimationDelay = 0 | 0.24 | 0.4 | 0.8;
export type ThemeAnimationType = 'spring' | 'linear';
export type ThemeAnimationSettings = {
  isEnabled: boolean;
  duration: ThemeAnimationDuration;
  delay: ThemeAnimationDelay;
  type: ThemeAnimationType;
};

/** Starting values a theme applies whenever it is selected. */
export type ThemeDefinition = {
  id: Theme;
  label: string;
  defaults: {
    color: ThemeColor;
    animationsEnabled: boolean;
    radius: ThemeRadius;
    containerWidth: ThemeContainerWidth;
  };
};

/** Everything the visitor can set. Read one value with `useThemeSetting`. */
export type ThemeState = {
  theme: ThemeOption;
  themeColor: ThemeColor;
  themeFontSize: ThemeFontSize;
  themeAppearance: ThemeAppearance;
  themeAnimationSettings: ThemeAnimationSettings;
  themeRadius: ThemeRadius;
  themeContainerWidth: ThemeContainerWidth;
  themeMode: ThemeMode | undefined;
  isInitialized: boolean;
} & ThemeEvents;

/** Setters. One stable object, see `useThemeActions`. */
export type ThemeActions = {
  setTheme: (themeOption: ThemeOption) => void;
  setThemeColor: (themeColor: ThemeColor) => void;
  setThemeFontSize: (themeFontSize: ThemeFontSize) => void;
  setThemeAppearance: (themeAppearance: ThemeAppearance) => void;
  toggleThemeAppearance: () => void;
  setThemeAnimationSettings: Dispatch<SetStateAction<ThemeAnimationSettings>>;
  setThemeRadius: (themeRadius: ThemeRadius) => void;
  setThemeContainerWidth: (themeContainerWidth: ThemeContainerWidth) => void;
  setThemeMode: Dispatch<SetStateAction<ThemeMode | undefined>>;
  setIsEventWinterEnabled: (isEventWinterEnabled: boolean) => void;
};

export type ThemeContextType = ThemeState & ThemeActions;
