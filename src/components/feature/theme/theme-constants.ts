import { getThemeOption, THEME_DEFINITIONS } from './theme-definitions';

import type {
  Theme,
  ThemeAnimationSettings,
  ThemeAppearance,
  ThemeColor,
  ThemeFontSize,
  ThemeOption
} from './theme-types';

export const THEME_OPTIONS: ThemeOption[] = THEME_DEFINITIONS.map(
  (definition) => getThemeOption(definition.id)
);

export const THEME_KEY = 'dr-theme';
export const THEME_KEY_APPEARANCE = 'dr-theme-appearance';
export const THEME_KEY_COLOR = 'dr-theme-color';
export const THEME_KEY_FONT_SIZE = 'dr-theme-font-size';
export const THEME_KEY_ANIMATION = 'dr-theme-animation';
export const THEME_KEY_RADIUS = 'dr-theme-radius';
export const THEME_KEY_CONTAINER_WIDTH = 'dr-theme-container-width';
export const THEME_KEY_EVENT_WINTER = 'dr-theme-event-winter';
export const THEME_KEY_PERSONA = 'dr-theme-persona';

export const THEME_DEFAULT: Theme = 'default';
export const THEME_OPTION_DEFAULT: ThemeOption = THEME_OPTIONS[0];
export const THEME_APPEARANCE_DEFAULT: ThemeAppearance = 'system';
export const THEME_COLOR_DEFAULT: ThemeColor = 'blue';
export const THEME_FONT_SIZE_DEFAULT: ThemeFontSize = 'md';
export const THEME_ANIMATION_SETTINGS_DEFAULT: ThemeAnimationSettings = {
  isEnabled: true,
  delay: 0.24,
  duration: 0.4,
  type: 'spring'
};
