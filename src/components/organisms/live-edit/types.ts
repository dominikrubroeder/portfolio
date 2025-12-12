import { Dispatch, ReactNode, SetStateAction } from 'react';

export type LiveEditElement = {
  id: string;
  name: string;
} | null;

export type LiveEditContextType = {
  liveEditEnabled: boolean;
  setLiveEditEnabled: Dispatch<SetStateAction<boolean>>;
  isOpenToolbar: boolean;
  setIsOpenToolbar: Dispatch<SetStateAction<boolean>>;
  isOpenDrawer: boolean;
  setIsOpenDrawer: Dispatch<SetStateAction<boolean>>;
  liveEditElement: LiveEditElement;
  setLiveEditElement: (liveEditElement: LiveEditElement) => void;
};

export type LiveEditContextProviderProps = {
  children: ReactNode;
};
