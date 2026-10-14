import type { ReactElement, ReactNode } from 'react';

export interface TooltipProps {
  /** Text that explains what the action does. */
  content: ReactNode;
  /** The interactive element the tooltip describes (e.g. `<button />`). */
  render: ReactElement;
  /** Content of the interactive element. */
  children?: ReactNode;
  side?: 'top' | 'bottom' | 'left' | 'right';
  className?: string;
}
