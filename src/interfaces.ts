import {
  ControlBarAction,
  ControlBarMobileMenuVisibility,
  ControlBarSections,
  ControlBarVisibility
} from '@/types';

export interface Tool {
  title: string;
  logo: string;
  href: string;
  website: string;
  description: string;
  keyword: string;
  priority: 'low' | 'high';
  experience: 'low' | 'moderate' | 'high' | 'daily';
  projects: string[];
}

export interface Technology extends Tool {}

export interface Social {
  title: string;
  logo: string;
  href: string;
  website: string;
  badge: string;
}

export interface Data {
  tools: Tool[];
  technologies: Technology[];
  socials: Social[];
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
