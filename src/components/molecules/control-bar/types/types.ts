import { ReactNode } from 'react';

export type ControlBarActionType = 'Avatar' | 'Back' | 'Up' | 'Mail';

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
  leftControlAction?: ControlBarActionType;
  rightControlAction?: ControlBarActionType;
}

export interface ControlBarState {
  activeSection: number;
  controlBarVisibility: ControlBarVisibility;
  mobileMenuVisibility: ControlBarMobileMenuVisibility;
}
