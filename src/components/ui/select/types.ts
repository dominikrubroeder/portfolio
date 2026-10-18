import type { ReactNode } from 'react';

export type SelectOption = {
  key: string;
  value: string;
  icon?: ReactNode;
  /** Short phrase under the label in the open list; the trigger shows the label only. */
  description?: string;
};
