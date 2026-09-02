import { ReactNode } from 'react';

export interface PlaygroundComponent {
  id: string;
  title: string;
  /** Short description, max. 2 sentences. */
  description: string;
  /** Detailed description about the build process, the thoughts and reasoning behind it. */
  detailedDescription?: string;
  component: ReactNode;
  componentDirective: 'use client' | 'use server';
  references?: string[];
  code?: string;
  animated: boolean;
  filename: string;
}
