import { Theme, ThemeOption } from '@/components/organisms/theme/types';

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
