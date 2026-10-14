import type { ReactNode } from 'react';

import type { UsageLevel } from '@/components/feature/tools';

export interface Brand {
  name: string;
  description?: string | undefined;
  href: string;
  logo?: ReactNode;
  usageLevel?: UsageLevel | undefined;
}
