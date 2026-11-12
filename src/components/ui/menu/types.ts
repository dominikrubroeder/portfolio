import type { ReactNode } from 'react';

export type MenuItem = {
  key: string;
  label: string;
  icon?: ReactNode;
  href: string;
  /** Opens in a new tab with `rel="noopener noreferrer"` and a hidden "(opens in a new tab)". */
  newTab?: boolean;
};
