import { ColorProp, SizeProp } from '@/lib/types';
import { ReactNode } from 'react';

export interface BadgeProps {
  variant?: ColorProp;
  size?: SizeProp;
  className?: string;
  children: ReactNode;
}
