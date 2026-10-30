import {
  THEME_KEY,
  THEME_KEY_ANIMATION,
  THEME_KEY_APPEARANCE,
  THEME_KEY_COLOR,
  THEME_KEY_CONTAINER_WIDTH,
  THEME_KEY_FONT_SIZE,
  THEME_KEY_RADIUS,
  THEME_APPEARANCE_DEFAULT
} from './theme-constants';
import {
  THEME_DEFINITIONS,
  THEME_VALUES_APPEARANCE,
  THEME_VALUES_COLOR,
  THEME_VALUES_CONTAINER_WIDTH,
  THEME_VALUES_FONT_SIZE,
  THEME_VALUES_RADIUS
} from './theme-definitions';

/**
 * Runs before first paint (inline in <head>). Reads the saved settings, validates them against
 * the theme registry and writes the `data-theme-*` attributes, so the page never flashes the
 * wrong look. Storage can throw (private windows): then every attribute still gets the theme's
 * defaults. Keep in sync with `theme-store.ts`.
 */
export const themeInitializationScript = `
  (function() {
    var html = document.documentElement;
    var defs = ${JSON.stringify(THEME_DEFINITIONS)};
    var values = {
      appearance: ${JSON.stringify(THEME_VALUES_APPEARANCE)},
      color: ${JSON.stringify(THEME_VALUES_COLOR)},
      fontSize: ${JSON.stringify(THEME_VALUES_FONT_SIZE)},
      radius: ${JSON.stringify(THEME_VALUES_RADIUS)},
      containerWidth: ${JSON.stringify(THEME_VALUES_CONTAINER_WIDTH)}
    };

    function read(key) {
      try { return localStorage.getItem(key); } catch (e) { return null; }
    }
    function pick(list, value, fallback) {
      return list.indexOf(value) === -1 ? fallback : value;
    }
    function setClass(prefix, value) {
      html.classList.forEach(function(name) {
        if (name.indexOf(prefix) === 0) html.classList.remove(name);
      });
      html.classList.add(prefix + value);
    }

    var themeId = read('${THEME_KEY}');
    var def = defs[0];
    for (var i = 0; i < defs.length; i++) if (defs[i].id === themeId) def = defs[i];

    var appearance = pick(values.appearance, read('${THEME_KEY_APPEARANCE}'), '${THEME_APPEARANCE_DEFAULT}');
    var storedColor = read('${THEME_KEY_COLOR}');
    if (storedColor === 'primary') storedColor = 'violett';
    var color = pick(values.color, storedColor, def.defaults.color);
    var fontSize = pick(values.fontSize, read('${THEME_KEY_FONT_SIZE}'), 'md');
    var radius = pick(values.radius, read('${THEME_KEY_RADIUS}'), def.defaults.radius);
    var containerWidth = pick(values.containerWidth, read('${THEME_KEY_CONTAINER_WIDTH}'), def.defaults.containerWidth);
    var storedAnimation = read('${THEME_KEY_ANIMATION}');
    var animations = storedAnimation === 'true' ? true : storedAnimation === 'false' ? false : def.defaults.animationsEnabled;

    var resolvedAppearance = appearance;
    if (appearance === 'system') {
      resolvedAppearance = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    setClass('theme-appearance-', resolvedAppearance);
    html.setAttribute('data-theme-appearance', appearance);

    setClass('theme-style-', def.id);
    html.setAttribute('data-theme', def.id);

    setClass('theme-color-', color);
    html.setAttribute('data-theme-color', color);

    setClass('theme-font-size-', fontSize);
    html.setAttribute('data-theme-font-size', fontSize);
    html.style.fontSize = fontSize === 'sm' ? '90%' : fontSize === 'lg' ? '110%' : '100%';

    html.setAttribute('data-theme-radius', radius);
    html.setAttribute('data-theme-container-width', containerWidth);
    html.setAttribute('data-theme-animations', animations ? 'on' : 'off');
  })();
`;
