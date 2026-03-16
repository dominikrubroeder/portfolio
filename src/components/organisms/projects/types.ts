import type { ReactNode } from 'react';

import type { Brand } from '@/components/organisms/brand';

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
  aspects: string[] | undefined;
  tools: Brand[] | undefined;
  technologies: Brand[] | undefined;
  companies:
    | {
        href: string | undefined;
        label: 'mediawave commerce GmbH' | 'Loy GmbH' | 'Private';
      }[]
    | undefined;
  caseStudyUrls: string[] | undefined;
  demoUrls: { label: string; src: string }[] | undefined;
  previewImage?: string;
  previewImageTimestamp?: string;
}
