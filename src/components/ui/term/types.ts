import type { ReactNode } from 'react';

export interface TermProps {
  /** Short explanation shown in the tooltip. */
  hint: ReactNode;
  /** The word or phrase that carries the dotted underline. */
  children: ReactNode;
  className?: string;
}
