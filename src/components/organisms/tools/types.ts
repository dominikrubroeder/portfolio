import type { ReactNode } from 'react';

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
  logo: ReactNode;
  knowledge: Knowledge;
}

export type Tools = { group: string; children: Tool[] }[];
