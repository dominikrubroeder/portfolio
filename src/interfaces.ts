import {
  ControlBarAction,
  ControlBarMobileMenuVisibility,
  ControlBarSections,
  ControlBarVisibility
} from '@/components/molecules/control-bar/types';
import { Tool } from '@/components/organisms/tools/types';

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
  activeSection: number;
  controlBarVisibility: ControlBarVisibility;
  mobileMenuVisibility: ControlBarMobileMenuVisibility;
}
