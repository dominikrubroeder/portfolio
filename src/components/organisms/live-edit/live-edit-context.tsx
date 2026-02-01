'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import {
  LiveEditContextProviderProps,
  LiveEditContextType,
  LiveEditElement
} from '@/components/organisms/live-edit';
import { useMediaQuery } from '@/hooks/use-media-query';

const LiveEditContext = createContext<LiveEditContextType | undefined>(
  undefined
);

export function LiveEditProvider({ children }: LiveEditContextProviderProps) {
  const [liveEditEnabled, setLiveEditEnabled] = useState<boolean>(false);
  const [isOpenToolbar, setIsOpenToolbar] = useState(false);
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  const [liveEditElement, setLiveEditElement] = useState<LiveEditElement>(null);
  const isDesktop = useMediaQuery('(min-width: 1280px)');

  useEffect(() => {
    if (isDesktop && isOpenDrawer) {
      document.body.style.paddingRight = '24rem';
    } else {
      document.body.style.paddingRight = '0';
    }
  }, [isDesktop, isOpenDrawer]);

  return (
    <LiveEditContext.Provider
      value={{
        liveEditEnabled,
        setLiveEditEnabled,
        isOpenToolbar,
        setIsOpenToolbar,
        isOpenDrawer,
        setIsOpenDrawer,
        liveEditElement,
        setLiveEditElement
      }}
    >
      {children}
    </LiveEditContext.Provider>
  );
}

export const useLiveEdit = () => {
  const context = useContext(LiveEditContext);

  if (!context) {
    throw new Error('useLiveEdit must be used within LiveEditProvider');
  }

  return context;
};
