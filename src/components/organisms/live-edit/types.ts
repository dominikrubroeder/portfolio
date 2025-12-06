import { Dispatch, ReactNode, SetStateAction } from 'react';

export type LiveEditContextType = {
  liveEditEnabled: boolean;
  setLiveEditEnabled: Dispatch<SetStateAction<boolean>>;
  isOpenDrawer: boolean;
  setIsOpenDrawer: Dispatch<SetStateAction<boolean>>;
};

export type LiveEditContextProviderProps = {
  children: ReactNode;
};
