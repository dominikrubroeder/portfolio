import type { ReactNode } from 'react';

import type { KnowledgeLevel } from '@/components/organisms/tools';

export interface Brand {
  name: string;
  description: string;
  href: string;
  logo: ReactNode;
  knowledge: KnowledgeLevel;
}
