import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

export function HeroBox({
  title,
  overline,
  children,
  className
}: {
  title: string | ReactNode;
  overline: string;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        'space-y-4 border border-t-8 border-r-8 border-t-primary border-r-primary p-8 [html[data-theme=default]_&]:rounded',
        className
      )}
    >
      <small className="text-primary">{overline}</small>
      <div className="title">{title}</div>

      {children}
    </div>
  );
}
