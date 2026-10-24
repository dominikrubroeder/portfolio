import type { ReactNode } from 'react';

import type { ColorProp, SizeProp } from '@/lib/types';

export interface BadgeProps {
  variant?: ColorProp;
  size?: SizeProp;
  className?: string;
  children: ReactNode;
}
