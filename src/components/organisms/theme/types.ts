import { Dispatch, SetStateAction } from 'react';

export type Theme = 'default' | 'crazy-color' | 'notes' | 'wireframe';
export type ThemeOption = { key: Theme; value: string };
export type ThemeColor =
  | 'primary'
  | 'violett'
  | 'blue'
  | 'orange'
  | 'foreground'
  | undefined;
export type ThemeMode = 'design' | 'dev';
export type ThemeFontSize = 'sm' | 'md' | 'lg';
export type ThemeAppearance = 'light' | 'dark' | 'system';
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
export type ThemeBorderSettingRadius = 'sm' | 'md' | 'lg';
export type ThemeBorderSettingStyle = 'solid' | 'dashed' | 'dotted';
export type ThemeBorderSettingWidth = 'sm' | 'md' | 'lg';
export type ThemeBorderSettings = {
  radius: ThemeBorderSettingRadius;
  style: ThemeBorderSettingStyle;
  width: ThemeBorderSettingWidth;
};

export type ThemeContextType = {
  theme: ThemeOption;
  setTheme: (themeOption: ThemeOption) => void;
  shuffleTheme: () => void;
  themeColor: ThemeColor;
  setThemeColor: (themeColor: ThemeColor) => void;
  themeFontSize: ThemeFontSize;
  setThemeFontSize: (themeFontSize: ThemeFontSize) => void;
  themeAppearance: ThemeAppearance;
  setThemeAppearance: (themeAppearance: ThemeAppearance) => void;
  themeAnimationSettings: ThemeAnimationSettings;
  setThemeAnimationSettings: Dispatch<SetStateAction<ThemeAnimationSettings>>;
  themeMode: ThemeMode | undefined;
  setThemeMode: Dispatch<SetStateAction<ThemeMode | undefined>>;
  setIsEventWinterEnabled: (isEventWinterEnabled: boolean) => void;
  shouldAnimate: boolean;
  isInitialized: boolean;
} & ThemeEvents;
