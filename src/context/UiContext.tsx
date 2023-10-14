'use client';

import React, { createContext, useEffect, useState } from 'react';

type UiContextType = {
  theme: null | string;
  setTheme: (theme: string) => void;
};

const UiContext = createContext<null | UiContextType>(null);

interface UiContextProviderProps {
  children: React.ReactNode;
}

export const UiContextProvider: React.FC<UiContextProviderProps> = ({
  children
}) => {
  const [theme, setTheme] = useState<null | string>(null);

  useEffect(() => {
    if (!localStorage.getItem('theme')) localStorage.setItem('theme', 'dark');
  }, []);

  const setThemeHandler = (theme: string) => {
    const lowerCaseTheme = theme.toLowerCase();

    setTheme(lowerCaseTheme);
    document.documentElement.className = `${lowerCaseTheme}`;
    document.documentElement.setAttribute('data-theme', lowerCaseTheme);
    localStorage.setItem('theme', lowerCaseTheme);
  };

  const context = {
    theme,
    setTheme: setThemeHandler
  };

  return <UiContext.Provider value={context}>{children}</UiContext.Provider>;
};

export default UiContext;
