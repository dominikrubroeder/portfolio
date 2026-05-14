import {
  Theme,
  ThemeAnimationSettings,
  ThemeAppearance,
  ThemeColor,
  ThemeFontSize,
  ThemeOption
} from '@/components/organisms/theme/types';

export const THEME_OPTIONS: ThemeOption[] = [
  {
    key: 'default',
    value: 'Default'
  },
  {
    key: 'wireframe',
    value: 'Wireframe'
  }
];

export const THEME_KEY = 'dr-theme';
export const THEME_KEY_APPEARANCE = 'dr-theme-appearance';
export const THEME_KEY_COLOR = 'dr-theme-color';
export const THEME_KEY_FONT_SIZE = 'dr-theme-font-size';
export const THEME_KEY_EVENT_WINTER = 'dr-theme-event-winter';
export const THEME_KEY_PERSONA = 'dr-theme-persona';

export const THEME_DEFAULT: Theme = 'default';
export const THEME_OPTION_DEFAULT: ThemeOption = THEME_OPTIONS[0];
export const THEME_APPEARANCE_DEFAULT: ThemeAppearance = 'light';
export const THEME_COLOR_DEFAULT: ThemeColor = 'blue';
export const THEME_FONT_SIZE_DEFAULT: ThemeFontSize = 'md';
export const THEME_ANIMATION_SETTINGS_DEFAULT: ThemeAnimationSettings = {
  isEnabled: true,
  delay: 0.24,
  duration: 0.4,
  type: 'spring'
};
