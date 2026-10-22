import type {
  Theme,
  ThemeAppearance,
  ThemeColor,
  ThemeContainerWidth,
  ThemeDefinition,
  ThemeFontSize,
  ThemeOption,
  ThemeRadius
} from './theme-types';

/**
 * The one place that lists the themes. A new theme is a new entry here: the selector,
 * the switch, the persistence and the pre-paint script all read this list.
 */
export const THEME_DEFINITIONS: ThemeDefinition[] = [
  {
    id: 'default',
    label: 'Default',
    defaults: {
      color: 'blue',
      animationsEnabled: true,
      radius: 'md',
      containerWidth: 'default'
    }
  },
  {
    id: 'wireframe',
    label: 'Wireframe',
    defaults: {
      color: 'foreground',
      animationsEnabled: false,
      radius: 'none',
      containerWidth: 'default'
    }
  }
];

export const THEME_VALUES_COLOR: ThemeColor[] = [
  'foreground',
  'blue',
  'violett',
  'orange'
];
export const THEME_VALUES_RADIUS: ThemeRadius[] = ['none', 'sm', 'md', 'lg'];
export const THEME_VALUES_CONTAINER_WIDTH: ThemeContainerWidth[] = [
  'default',
  'wide',
  'full'
];
export const THEME_VALUES_APPEARANCE: ThemeAppearance[] = [
  'light',
  'dark',
  'system'
];
export const THEME_VALUES_FONT_SIZE: ThemeFontSize[] = ['sm', 'md', 'lg'];

export const THEME_DEFINITION_DEFAULT: ThemeDefinition = THEME_DEFINITIONS[0];

/** Unknown or missing id falls back to the default theme. */
export function getThemeDefinition(id: string | null | undefined) {
  return (
    THEME_DEFINITIONS.find((definition) => definition.id === id) ??
    THEME_DEFINITION_DEFAULT
  );
}

export function getThemeOption(id: string | null | undefined): ThemeOption {
  const { id: key, label } = getThemeDefinition(id);
  return { key, value: label };
}

export function isTheme(id: string | null | undefined): id is Theme {
  return THEME_DEFINITIONS.some((definition) => definition.id === id);
}

export function parseThemeColor(
  value: string | null | undefined,
  fallback: ThemeColor
): ThemeColor {
  // `primary` was the violet-leaning accent before accents had names.
  if (value === 'primary') return 'violett';
  return THEME_VALUES_COLOR.find((color) => color === value) ?? fallback;
}

export function parseThemeRadius(
  value: string | null | undefined,
  fallback: ThemeRadius
): ThemeRadius {
  return THEME_VALUES_RADIUS.find((radius) => radius === value) ?? fallback;
}

export function parseThemeContainerWidth(
  value: string | null | undefined,
  fallback: ThemeContainerWidth
): ThemeContainerWidth {
  return (
    THEME_VALUES_CONTAINER_WIDTH.find((width) => width === value) ?? fallback
  );
}

export function parseThemeAppearance(
  value: string | null | undefined,
  fallback: ThemeAppearance
): ThemeAppearance {
  return (
    THEME_VALUES_APPEARANCE.find((appearance) => appearance === value) ??
    fallback
  );
}

export function parseThemeFontSize(
  value: string | null | undefined,
  fallback: ThemeFontSize
): ThemeFontSize {
  return THEME_VALUES_FONT_SIZE.find((size) => size === value) ?? fallback;
}

export function parseThemeAnimationsEnabled(
  value: string | null | undefined,
  fallback: boolean
): boolean {
  if (value === 'true') return true;
  if (value === 'false') return false;
  return fallback;
}
