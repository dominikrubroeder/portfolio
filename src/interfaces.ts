import {
  ControlBarAction,
  ControlBarMobileMenuVisibility,
  ControlBarSections,
  ControlBarVisibility
} from '@/types';

export type ToolCategory =
  | 'AI'
  | 'API'
  | 'Authentication'
  | 'Browser'
  | 'Chat'
  | 'CMS'
  | 'Color'
  | 'Deployment'
  | 'Design'
  | 'Docs'
  | 'DX'
  | 'Icon'
  | 'IDE'
  | 'Image'
  | 'Motion'
  | 'Payment'
  | 'Performance'
  | 'Project Management'
  | 'Search'
  | 'Shop System'
  | 'Testing'
  | 'UI'
  | 'Version Control';

export interface Tool {
  title: string;
  logo: string;
  href: string;
  website: string;
  description: string;
  keyword: string;
  priority: 'normal' | 'high';
  experience: 'low' | 'moderate' | 'high' | 'daily';
  projects: string[];
  category: ToolCategory;
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
