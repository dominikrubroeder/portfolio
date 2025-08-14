import type { ReactNode } from 'react';

import type { Knowledge } from '@/components/organisms/tools';

export interface Brand {
  name: string;
  description: string;
  href: string;
  logo: ReactNode;
  knowledge: Knowledge;
}
