import type { ReactNode } from 'react';

import type { Brand } from '@/components/organisms/brand';

export interface Project {
  title: string;
  category: string[];
  url: string;
  isCurrent: boolean;
  isActive: boolean;
  readableTitle: string;
  timeframe?: string;
  logo: ReactNode | undefined;
  role: string[] | undefined;
  aspects: string[] | undefined;
  tools: Brand[] | undefined;
  technologies: Brand[] | undefined;
  company: string | undefined;
  caseStudyUrls: string[] | undefined;
  demoUrls: string[] | undefined;
  previewImage?: string;
  previewImageTimestamp?: string;
}
