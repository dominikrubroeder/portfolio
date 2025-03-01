import { ReactNode } from 'react';

export type ControlBarAction = 'Avatar' | 'Back' | 'Up';

export type ControlBarSections = {
  id: string;
  label: string;
  icon: ReactNode;
  className: string;
  defaultActive: boolean;
}[];

export type ControlBarVisibility = 'collapsed' | 'expanded';

export type ControlBarMobileMenuVisibility = 'visible' | 'invisible';

export type ControlBarActiveSection = number | null;
