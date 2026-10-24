import type { ReactNode } from 'react';

import type { StaticImageData } from 'next/image';

import type { Brand } from '@/components/feature/brand';

export type ProjectResponsibility =
  | string
  | { text: string; link: { label: string; href: string } };

export interface Project {
  title: string;
  subline?: string;
  category: string[];
  url: string;
  isCurrent: boolean;
  isActive: boolean;
  description: string;
  timeframe?: string;
  logo: ReactNode | undefined;
  role: string[] | undefined;
  responsibilities: ProjectResponsibility[] | undefined;
  tools: Brand[] | undefined;
  technologies: Brand[] | undefined;
  companies:
    | {
        href: string | undefined;
        label: 'mediawave commerce GmbH' | 'Loy GmbH' | 'Private';
      }[]
    | undefined;
  demoUrls: { label: string; src: string }[] | undefined;
  previewImage?: StaticImageData;
  previewImageTimestamp?: string;
}
