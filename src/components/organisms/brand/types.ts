import type { ReactNode } from 'react';

import type { UsageLevel } from '@/components/organisms/tools';

export interface Brand {
  name: string;
  description: string | undefined;
  href: string;
  logo: ReactNode;
  knowledge: UsageLevel | undefined;
}
