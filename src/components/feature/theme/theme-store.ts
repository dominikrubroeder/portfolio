import {
  THEME_ANIMATION_SETTINGS_DEFAULT,
  THEME_APPEARANCE_DEFAULT,
  THEME_FONT_SIZE_DEFAULT,
  THEME_KEY,
  THEME_KEY_ANIMATION,
  THEME_KEY_APPEARANCE,
  THEME_KEY_COLOR,
  THEME_KEY_CONTAINER_WIDTH,
  THEME_KEY_EVENT_WINTER,
  THEME_KEY_FONT_SIZE,
  THEME_KEY_PERSONA,
  THEME_KEY_RADIUS
} from './theme-constants';
import {
  getThemeDefinition,
  getThemeOption,
  parseThemeAnimationsEnabled,
  parseThemeAppearance,
  parseThemeColor,
  parseThemeContainerWidth,
  parseThemeFontSize,
  parseThemeRadius,
  THEME_DEFINITION_DEFAULT
} from './theme-definitions';

import type {
  ThemeActions,
  ThemeAnimationSettings,
  ThemeAppearance,
  ThemeColor,
  ThemeContainerWidth,
  ThemeFontSize,
  ThemeMode,
  ThemeOption,
  ThemeRadius,
  ThemeState
} from './theme-types';

/**
 * The theme settings live here, outside React. A setter writes the `data-theme-*` attribute on
 * <html> in the same call, so CSS restyles the page in the same frame, then notifies the few
 * components that display that setting. The page tree never re-renders because a setting changed.
 * Client-only: imported by client components, never by server code.
 */

const INITIAL_STATE: ThemeState = {
  theme: getThemeOption(THEME_DEFINITION_DEFAULT.id),
  themeColor: THEME_DEFINITION_DEFAULT.defaults.color,
  themeFontSize: THEME_FONT_SIZE_DEFAULT,
  themeAppearance: THEME_APPEARANCE_DEFAULT,
  themeAnimationSettings: {
    ...THEME_ANIMATION_SETTINGS_DEFAULT,
    isEnabled: THEME_DEFINITION_DEFAULT.defaults.animationsEnabled
  },
  themeRadius: THEME_DEFINITION_DEFAULT.defaults.radius,
  themeContainerWidth: THEME_DEFINITION_DEFAULT.defaults.containerWidth,
  themeMode: undefined,
  isEventWinterEnabled: true,
  isInitialized: false
};

let state: ThemeState = INITIAL_STATE;
const listeners = new Set<() => void>();

export const getThemeState = () => state;
export const getThemeServerState = () => INITIAL_STATE;

export const subscribeToTheme = (listener: () => void) => {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
};

function update(patch: Partial<ThemeState>) {
  state = { ...state, ...patch };
  listeners.forEach((listener) => listener());
}

// Storage can throw (private windows, blocked site data). A setting then still applies for the
// session and the theme defaults return on the next load.
function readStorage(key: string) {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

function writeStorage(key: string, value: string | null) {
  try {
    if (value === null) localStorage.removeItem(key);
    else localStorage.setItem(key, value);
  } catch {
    // Ignore: see above.
  }
}

const html = () => document.documentElement;

function setClass(prefix: string, value: string) {
  const element = html();
  element.classList.forEach((className) => {
    if (className.startsWith(prefix)) element.classList.remove(className);
  });
  element.classList.add(`${prefix}${value}`);
}

function applyAppearance(appearance: ThemeAppearance) {
  const resolved =
    appearance === 'system'
      ? window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light'
      : appearance;

  setClass('theme-appearance-', resolved);
  html().dataset.themeAppearance = appearance;
}

function applyTheme(option: ThemeOption) {
  setClass('theme-style-', option.key);
  html().dataset.theme = option.key;
}

function applyColor(color: ThemeColor) {
  setClass('theme-color-', color);
  html().dataset.themeColor = color;
}

function applyFontSize(fontSize: ThemeFontSize) {
  setClass('theme-font-size-', fontSize);
  html().style.fontSize =
    fontSize === 'sm' ? '90%' : fontSize === 'lg' ? '110%' : '100%';
  html().dataset.themeFontSize = fontSize;
}

function applyAnimations(isEnabled: boolean) {
  html().dataset.themeAnimations = isEnabled ? 'on' : 'off';
}

function applyRadius(radius: ThemeRadius) {
  html().dataset.themeRadius = radius;
}

function applyContainerWidth(width: ThemeContainerWidth) {
  html().dataset.themeContainerWidth = width;
}

function setThemeColor(themeColor: ThemeColor) {
  applyColor(themeColor);
  writeStorage(THEME_KEY_COLOR, themeColor);
  update({ themeColor });
}

function setThemeFontSize(themeFontSize: ThemeFontSize) {
  applyFontSize(themeFontSize);
  writeStorage(THEME_KEY_FONT_SIZE, themeFontSize);
  update({ themeFontSize });
}

function setThemeAppearance(themeAppearance: ThemeAppearance) {
  applyAppearance(themeAppearance);
  writeStorage(THEME_KEY_APPEARANCE, themeAppearance);
  update({ themeAppearance });
}

function toggleThemeAppearance() {
  const { themeAppearance } = state;
  setThemeAppearance(
    themeAppearance === 'light'
      ? 'dark'
      : themeAppearance === 'dark'
        ? 'system'
        : 'light'
  );
}

function setThemeRadius(themeRadius: ThemeRadius) {
  applyRadius(themeRadius);
  writeStorage(THEME_KEY_RADIUS, themeRadius);
  update({ themeRadius });
}

function setThemeContainerWidth(themeContainerWidth: ThemeContainerWidth) {
  applyContainerWidth(themeContainerWidth);
  writeStorage(THEME_KEY_CONTAINER_WIDTH, themeContainerWidth);
  update({ themeContainerWidth });
}

const setThemeAnimationSettings: ThemeActions['setThemeAnimationSettings'] = (
  action
) => {
  const themeAnimationSettings: ThemeAnimationSettings =
    typeof action === 'function'
      ? action(state.themeAnimationSettings)
      : action;

  applyAnimations(themeAnimationSettings.isEnabled);
  writeStorage(THEME_KEY_ANIMATION, String(themeAnimationSettings.isEnabled));
  update({ themeAnimationSettings });
};

/** Selecting a theme applies that theme's defaults. Appearance and font size stay. */
function setTheme(option: ThemeOption) {
  const { defaults } = getThemeDefinition(option.key);
  const theme = getThemeOption(option.key);
  const themeAnimationSettings: ThemeAnimationSettings = {
    ...THEME_ANIMATION_SETTINGS_DEFAULT,
    isEnabled: defaults.animationsEnabled
  };

  applyTheme(theme);
  applyColor(defaults.color);
  applyAnimations(defaults.animationsEnabled);
  applyRadius(defaults.radius);
  applyContainerWidth(defaults.containerWidth);

  writeStorage(THEME_KEY, theme.key);
  writeStorage(THEME_KEY_COLOR, defaults.color);
  writeStorage(THEME_KEY_ANIMATION, String(defaults.animationsEnabled));
  writeStorage(THEME_KEY_RADIUS, defaults.radius);
  writeStorage(THEME_KEY_CONTAINER_WIDTH, defaults.containerWidth);

  update({
    theme,
    themeColor: defaults.color,
    themeAnimationSettings,
    themeRadius: defaults.radius,
    themeContainerWidth: defaults.containerWidth
  });
}

const setThemeMode: ThemeActions['setThemeMode'] = (action) => {
  const themeMode: ThemeMode | undefined =
    typeof action === 'function' ? action(state.themeMode) : action;

  writeStorage(THEME_KEY_PERSONA, themeMode ?? null);
  update({ themeMode });
};

function setIsEventWinterEnabled(isEventWinterEnabled: boolean) {
  writeStorage(THEME_KEY_EVENT_WINTER, JSON.stringify(isEventWinterEnabled));
  update({ isEventWinterEnabled });
}

/** One stable object: calling a setter never causes a render by itself. */
export const themeActions: ThemeActions = {
  setTheme,
  setThemeColor,
  setThemeFontSize,
  setThemeAppearance,
  toggleThemeAppearance,
  setThemeAnimationSettings,
  setThemeRadius,
  setThemeContainerWidth,
  setThemeMode,
  setIsEventWinterEnabled
};

/** Restore the saved settings once after hydration. Invalid values fall back to the theme's defaults. */
export function initThemeStore() {
  const theme = getThemeOption(readStorage(THEME_KEY));
  const { defaults } = getThemeDefinition(theme.key);

  const themeColor = parseThemeColor(
    readStorage(THEME_KEY_COLOR),
    defaults.color
  );
  const themeFontSize = parseThemeFontSize(
    readStorage(THEME_KEY_FONT_SIZE),
    THEME_FONT_SIZE_DEFAULT
  );
  const themeAppearance = parseThemeAppearance(
    readStorage(THEME_KEY_APPEARANCE),
    THEME_APPEARANCE_DEFAULT
  );
  const themeRadius = parseThemeRadius(
    readStorage(THEME_KEY_RADIUS),
    defaults.radius
  );
  const themeContainerWidth = parseThemeContainerWidth(
    readStorage(THEME_KEY_CONTAINER_WIDTH),
    defaults.containerWidth
  );
  const themeAnimationSettings: ThemeAnimationSettings = {
    ...THEME_ANIMATION_SETTINGS_DEFAULT,
    isEnabled: parseThemeAnimationsEnabled(
      readStorage(THEME_KEY_ANIMATION),
      defaults.animationsEnabled
    )
  };
  const storedMode = readStorage(THEME_KEY_PERSONA);
  const themeMode =
    storedMode === 'design' || storedMode === 'dev' ? storedMode : undefined;
  const storedWinter = readStorage(THEME_KEY_EVENT_WINTER);
  const isEventWinterEnabled =
    storedWinter === null ? true : storedWinter !== 'false';

  applyTheme(theme);
  applyColor(themeColor);
  applyFontSize(themeFontSize);
  applyAppearance(themeAppearance);
  applyAnimations(themeAnimationSettings.isEnabled);
  applyRadius(themeRadius);
  applyContainerWidth(themeContainerWidth);

  update({
    theme,
    themeColor,
    themeFontSize,
    themeAppearance,
    themeAnimationSettings,
    themeRadius,
    themeContainerWidth,
    themeMode,
    isEventWinterEnabled,
    isInitialized: true
  });
}

/** Re-resolve `system` appearance when the OS preference changes. */
export function resolveSystemAppearance() {
  applyAppearance('system');
}
