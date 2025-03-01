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

export interface ControlBar {
  sections: ControlBarSections;
  collapse: boolean;
  leftControlAction?: ControlBarAction;
  rightControlAction?: ControlBarAction;
}

export interface ControlBarState {
  activeSection: number;
  controlBarVisibility: ControlBarVisibility;
  mobileMenuVisibility: ControlBarMobileMenuVisibility;
}
