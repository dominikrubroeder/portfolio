import {
  ControlBarAction,
  ControlBarMobileMenuVisibility,
  ControlBarSections,
  ControlBarVisibility
} from '@/types';

export type Knowledge =
  | 'Not started'
  | 'Used'
  | 'Experienced'
  | 'Professional'
  | 'Daily';

export interface Tool {
  title: string;
  description: string;
  website: string;
  logo: string;
  type: string;
  knowledge: Knowledge;
}

export interface Technology extends Tool {}

export interface Social {
  title: string;
  logo: string;
  href: string;
  website: string;
}

export interface ControlBar {
  sections: ControlBarSections;
  collapse: boolean;
  leftControlAction?: ControlBarAction;
  rightControlAction?: ControlBarAction;
}

export interface ControlBarState {
  controlBarVisibility: ControlBarVisibility;
  mobileMenuVisibility: ControlBarMobileMenuVisibility;
}
