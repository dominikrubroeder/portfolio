'use client';

import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState
} from 'react';

export type Theme = 'dev' | 'design' | 'auto';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const AppContext = createContext<ThemeContextType | null>(null);

export const AppProvider = ({ children }: { children: ReactNode }) => {
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

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useApp = (): ThemeContextType => {
  const context = useContext(AppContext);

  if (context === null) {
    throw new Error('useApp must be used within a ThemeProvider');
  }

  return context;
};
