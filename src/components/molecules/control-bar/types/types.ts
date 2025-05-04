import { ReactNode } from 'react';

export type ControlBarSections = {
  id: string;
  label: string;
  icon: ReactNode;
  className: string;
  defaultActive: boolean;
}[];
