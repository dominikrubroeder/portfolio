import type { ControlBarAction as ControlBarActionType } from '@/types';

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
  sections: { id: string; label: string; icon: string }[];
  collapse: boolean;
  leftControlAction: ControlBarActionType;
  rightControlAction: ControlBarActionType;
}
