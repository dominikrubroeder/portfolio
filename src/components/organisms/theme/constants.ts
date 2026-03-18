import {
  Theme,
  ThemeAppearance,
  ThemeColor,
  ThemeOption
} from '@/components/organisms/theme/types';

export const THEMES: Theme[] = ['animate', 'notes', 'wireframe'];
export const THEME_OPTIONS: ThemeOption[] = [
  {
    key: 'animate',
    value: 'Animate'
  },
  {
    key: 'notes',
    value: 'Notes'
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
export const THEME_KEY_MODE = 'dr-theme-mode';

export const THEME_DEFAULT: Theme = 'animate';
export const THEME_OPTION_DEFAULT: ThemeOption = {
  key: THEME_DEFAULT,
  value: 'Animate'
};
export const THEME_APPEARANCE_DEFAULT: ThemeAppearance = 'light';
export const THEME_COLOR_DEFAULT: ThemeColor = 'blue';
