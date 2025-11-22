export type Theme = 'animate' | 'notes' | 'wireframe';
export type ThemeOption = { key: Theme; value: string };
export type ThemeColor = 'primary' | 'blue' | 'orange';
export type ThemeMode = 'design' | 'dev';
export type ThemeFontSize = 'sm' | 'md' | 'lg';
export type ThemeAppearance = 'light' | 'dark' | 'system';
export type ThemeEvents = {
  isEventWinterEnabled: boolean;
};

export type ThemeContextType = {
  theme: ThemeOption;
  setTheme: (themeOption: ThemeOption) => void;
  themeColor: ThemeColor;
  setThemeColor: (themeColor: ThemeColor) => void;
  themeFontSize: ThemeFontSize;
  setThemeFontSize: (themeFontSize: ThemeFontSize) => void;
  themeAppearance: ThemeAppearance;
  setThemeAppearance: (themeAppearance: ThemeAppearance) => void;
  themeMode: ThemeMode | undefined;
  setThemeMode: (themeMode: ThemeMode) => void;
  setIsEventWinterEnabled: (isEventWinterEnabled: boolean) => void;
} & ThemeEvents;
