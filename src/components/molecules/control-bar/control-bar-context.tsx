'use client';

import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState
} from 'react';

interface ThemeContextType {}

const ControlBarContext = createContext<ThemeContextType | null>(null);

export const ControlBarProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState<{
    activeSection: number | undefined;
    isUnfolded: boolean;
  }>({
    activeSection: undefined,
    isUnfolded: false
  });

  const setActiveSection = useCallback(
    ({ activeSection }: { activeSection: number }) => {
      setState((previousState) => {
        return { ...previousState, activeSection: activeSection };
      });
    },
    []
  );

  const toggleIsUnfolded = useCallback(() => {
    setState((previousState) => {
      return { ...previousState, isUnfolded: !previousState.isUnfolded };
    });
  }, []);

  const value = {
    theme,
    setTheme: handleTheme
  };

  return (
    <ControlBarContext.Provider value={value}>
      {children}
    </ControlBarContext.Provider>
  );
};

export const useApp = (): ThemeContextType => {
  const context = useContext(ControlBarContext);

  if (context === null) {
    throw new Error('useApp must be used within a ThemeProvider');
  }

  return context;
};
