'use client';

import { createContext, useContext, useState } from 'react';
import {
  LiveEditContextProviderProps,
  LiveEditContextType
} from '@/components/organisms/live-edit';

const LiveEditContext = createContext<LiveEditContextType | undefined>(
  undefined
);

export function LiveEditProvider({ children }: LiveEditContextProviderProps) {
  const [liveEditEnabled, setLiveEditEnabled] = useState<boolean>(false);

  return (
    <LiveEditContext.Provider value={{ liveEditEnabled, setLiveEditEnabled }}>
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
