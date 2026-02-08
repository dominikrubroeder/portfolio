import { Badge, BadgeProps } from '@/components/atoms/badge';
import { Hr, HrProps } from '@/components/atoms/hr';
import { BaseProps } from '@/lib/types';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

export function BadgeHrGroup({
  badgeProps = {},
  hrProps = {},
  children,
  className
}: {
  badgeProps?: Partial<Omit<BadgeProps, 'children'>>;
  hrProps?: Partial<HrProps>;
  children: ReactNode;
} & BaseProps) {
  return (
    <div
      className={cn('mb-3 flex items-center justify-center gap-4', className)}
    >
      <Badge {...badgeProps}>{children}</Badge>
      <Hr {...hrProps} className={cn('my-0', hrProps.className)} />
    </div>
  );
}
