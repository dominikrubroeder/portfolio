'use client';

import type { ReactNode } from 'react';
import React, {
  createContext,
  use,
  useCallback,
  useEffect,
  useState
} from 'react';

export type Theme = 'primary' | 'blue' | 'orange' | 'design' | 'dev';
export type ThemeFontSize = 'sm' | 'md' | 'lg';
export type ThemeAppearance = 'light' | 'dark' | 'system';

interface ThemeContextType {
  theme: Theme;
  fontSize: ThemeFontSize;
  appearance: ThemeAppearance;
  setTheme: (theme: Theme) => void;
  setFontSize: (fontSize: ThemeFontSize) => void;
  setAppearance: (appearance: ThemeAppearance) => void;
}

const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>('primary');
  const [fontSize, setFontSize] = useState<ThemeFontSize>('md');
  const [appearance, setAppearance] = useState<ThemeAppearance>('light');

  // TODO: Check why in night times, explicit `light` appearance is not working
  const handleTheme = useCallback((theme: Theme) => {
    setTheme(theme);

    const htmlTag = document.documentElement;

    htmlTag.classList.forEach((className) => {
      if (className.startsWith('theme-')) {
        htmlTag.classList.remove(className);
      }
    });

    htmlTag.classList.add(`theme-${theme}`);

    htmlTag.dataset.theme = theme;

    localStorage['dr-theme'] = theme;
  }, []);

  const handleFontSize = useCallback((fontSize: ThemeFontSize) => {
    setFontSize(fontSize);

    const htmlTag = document.documentElement;

    htmlTag.classList.forEach((className) => {
      if (className.startsWith('font-size-')) {
        htmlTag.classList.remove(className);
      }
    });

    htmlTag.style.fontSize =
      fontSize === 'sm'
        ? '90%'
        : fontSize === 'md'
          ? '100%'
          : fontSize === 'lg'
            ? '110%'
            : '100%';

    htmlTag.classList.add(`font-size-${fontSize}`);

    htmlTag.dataset.fontSize = fontSize;

    localStorage['dr-font-size'] = fontSize;
  }, []);

  const handleAppearance = useCallback((appearance: ThemeAppearance) => {
    setAppearance(appearance);

    const htmlElement = document.documentElement;

    htmlElement.classList.forEach((className) => {
      if (className.startsWith('appearance-')) {
        htmlElement.classList.remove(className);
      }
    });

    htmlElement.classList.add(`appearance-${appearance}`);

    htmlElement.dataset.appearance = appearance;

    localStorage['dr-appearance'] = appearance;
  }, []);

  const initTheme = useCallback(() => {
    const localTheme = localStorage.getItem('dr-theme');
    if (
      localTheme &&
      (localTheme === 'primary' ||
        localTheme === 'blue' ||
        localTheme === 'orange' ||
        localTheme === 'design' ||
        localTheme === 'dev') &&
      localTheme !== theme
    )
      handleTheme(localTheme as Theme);
  }, [handleTheme, theme]);

  const initAppearance = useCallback(() => {
    const localAppearance = localStorage.getItem('dr-appearance');

    if (
      localAppearance &&
      (localAppearance === 'dark' ||
        localAppearance === 'light' ||
        localAppearance === 'system') &&
      localAppearance !== appearance
    )
      handleAppearance(localAppearance);
  }, [appearance, handleAppearance]);

  const initFontSize = useCallback(() => {
    const localFontSize = localStorage.getItem('dr-font-size');
    if (
      localFontSize &&
      (localFontSize === 'sm' ||
        localFontSize === 'md' ||
        localFontSize === 'lg') &&
      localFontSize !== fontSize
    )
      handleFontSize(localFontSize as ThemeFontSize);
  }, [fontSize, handleFontSize]);

  useEffect(() => {
    initAppearance();
    initTheme();
    initFontSize();
  }, [initAppearance, initFontSize, initTheme]);

  const value = {
    theme,
    fontSize,
    appearance,
    setTheme: handleTheme,
    setFontSize: handleFontSize,
    setAppearance: handleAppearance
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = use(ThemeContext);

  if (context === null) {
    throw new Error('useTheme: useTheme must be used within a ThemeProvider');
  }

  return context;
};
