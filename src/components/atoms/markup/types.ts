import type { ReactNode } from 'react';

import type { ColorReducedProp, HTMLTag, SizeProp } from '@/lib/types';

export interface MarkupProps {
  variant?: ColorReducedProp;
  size?: SizeProp;
  as?: HTMLTag;
  backticks?: boolean;
  className?: string;
  children: ReactNode;
}
