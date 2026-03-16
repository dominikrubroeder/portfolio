import {
  THEME_APPEARANCE_DEFAULT,
  THEME_COLOR_DEFAULT,
  THEME_DEFAULT,
  THEME_KEY,
  THEME_KEY_APPEARANCE,
  THEME_KEY_COLOR,
  THEME_KEY_FONT_SIZE
} from '@/components/organisms/theme/constants';

export const themeInitializationScript = `
  (function() {
    try {
      const appearance = localStorage.getItem('${THEME_KEY_APPEARANCE}') || '${THEME_APPEARANCE_DEFAULT}';
      const theme = localStorage.getItem('${THEME_KEY}') || '${THEME_DEFAULT}';
      const color = localStorage.getItem('${THEME_KEY_COLOR}') || '${THEME_COLOR_DEFAULT}';
      const fontSize = localStorage.getItem('${THEME_KEY_FONT_SIZE}') || 'md';

      const html = document.documentElement;

      // Appearance
      let resolvedAppearance = appearance;
      if (appearance === 'system') {
        resolvedAppearance = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      }
      
      html.classList.forEach((className) => {
        if (className.startsWith('theme-appearance-')) {
          html.classList.remove(className);
        }
      });
      html.classList.add('theme-appearance-' + resolvedAppearance);
      html.setAttribute('data-theme-appearance', appearance);

      // Theme Style
      html.classList.forEach((className) => {
        if (className.startsWith('theme-style-')) {
          html.classList.remove(className);
        }
      });
      html.classList.add('theme-style-' + theme);
      html.setAttribute('data-theme', theme);

      // Color
      if (color) {
        html.classList.forEach((className) => {
          if (className.startsWith('theme-color-')) {
            html.classList.remove(className);
          }
        });
        html.classList.add('theme-color-' + color);
        html.setAttribute('data-theme-color', color);
      }

      // Font Size
      html.classList.forEach((className) => {
        if (className.startsWith('theme-font-size-')) {
          html.classList.remove(className);
        }
      });
      html.classList.add('theme-font-size-' + fontSize);
      html.setAttribute('data-theme-font-size', fontSize);
      
      if (fontSize === 'sm') html.style.fontSize = '90%';
      else if (fontSize === 'md') html.style.fontSize = '100%';
      else if (fontSize === 'lg') html.style.fontSize = '110%';

    } catch (e) {}
  })();
`;
