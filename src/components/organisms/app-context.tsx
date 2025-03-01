'use client';

import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState
} from 'react';

type Theme = 'dev' | 'design' | 'auto';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | null>(null);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>('auto');

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
  }, []);

  const value = {
    theme,
    setTheme: handleTheme
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);

  if (context === null) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return context;
};
