'use client';

import type {
  ReactNode} from 'react';
import React, {
  createContext,
  use,
  useCallback,
  useEffect,
  useState
} from 'react';

export type Theme = 'primary' | 'blue' | 'orange';
export type FontSize = 'sm' | 'md' | 'lg';
export type Appearance = 'light' | 'dark' | 'auto';

interface ThemeContextType {
  theme: Theme;
  fontSize: FontSize;
  appearance: 'light' | 'dark' | 'auto';
  setTheme: (theme: Theme) => void;
  setFontSize: (fontSize: FontSize) => void;
  setAppearance: (appearance: Appearance) => void;
}

const AppContext = createContext<ThemeContextType | null>(null);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>('primary');
  const [fontSize, setFontSize] = useState<FontSize>('md');
  const [appearance, setAppearance] = useState<Appearance>('light');

  useEffect(() => {
    const localTheme = localStorage.getItem('dr-theme');
    if (localTheme && localTheme !== theme) handleTheme(localTheme as Theme);
  }, []);

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

  const handleFontSize = useCallback((fontSize: FontSize) => {
    setFontSize(fontSize);

    const htmlTag = document.documentElement;

    htmlTag.classList.forEach((className) => {
      if (className.startsWith('font-size-')) {
        htmlTag.classList.remove(className);
      }
    });

    htmlTag.classList.add(`font-size-${fontSize}`);

    htmlTag.dataset.fontSize = fontSize;
  }, []);

  const handleAppearance = useCallback((appearance: Appearance) => {
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

  const value = {
    theme,
    fontSize,
    appearance,
    setTheme: handleTheme,
    setFontSize: handleFontSize,
    setAppearance: handleAppearance
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useApp = (): ThemeContextType => {
  const context = use(AppContext);

  if (context === null) {
    throw new Error('useApp must be used within a ThemeProvider');
  }

  return context;
};
