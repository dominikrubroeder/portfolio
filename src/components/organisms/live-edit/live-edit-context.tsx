'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import {
  LiveEditContextProviderProps,
  LiveEditContextType
} from '@/components/organisms/live-edit';

const LiveEditContext = createContext<LiveEditContextType | undefined>(
  undefined
);

export function LiveEditProvider({ children }: LiveEditContextProviderProps) {
  const [liveEditEnabled, setLiveEditEnabled] = useState<boolean>(false);
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);

  useEffect(() => {
    if (isOpenDrawer) {
      document.body.style.paddingRight = '24rem';
    } else {
      document.body.style.paddingRight = '0';
    }
  }, [isOpenDrawer]);

  return (
    <LiveEditContext.Provider
      value={{
        liveEditEnabled,
        setLiveEditEnabled,
        isOpenDrawer,
        setIsOpenDrawer
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
