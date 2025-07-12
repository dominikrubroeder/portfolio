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
export type ThemeAppearance = 'light' | 'dark' | 'auto';

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

    const htmlTag = document.documentElement;

    htmlTag.classList.forEach((className) => {
      if (className.startsWith('appearance-')) {
        htmlTag.classList.remove(className);
      }
    });

    htmlTag.classList.add(`appearance-${appearance}`);

    htmlTag.dataset.appearance = appearance;
  }, []);

  useEffect(() => {
    const localTheme = localStorage.getItem('dr-theme');
    const localFontSize = localStorage.getItem('dr-font-size');
    if (localTheme && localTheme !== theme) handleTheme(localTheme as Theme);
    if (localFontSize && localFontSize !== fontSize)
      handleFontSize(localFontSize as ThemeFontSize);
  }, [fontSize, handleFontSize, handleTheme, theme]);

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
