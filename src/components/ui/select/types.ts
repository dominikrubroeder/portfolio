import type { ReactNode } from 'react';

export type SelectOption = {
  key: string;
  value: string;
  icon?: ReactNode;
  /** Marks the option that equals the theme's default for this setting; the open list shows a "Default" tag. */
  isDefault?: boolean;
};
