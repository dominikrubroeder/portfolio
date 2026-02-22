import { Badge, BadgeProps } from '@/components/atoms/badge';
import { Hr, HrProps } from '@/components/atoms/hr';
import { BaseComponentProps } from '@/lib/types';
import { cn } from '@/lib/utils';

export function BadgeHrGroup({
  badgeProps = [],
  hrProps = {},
  className
}: {
  badgeProps?: BadgeProps[];
  hrProps?: Partial<HrProps>;
} & BaseComponentProps) {
  return (
    <div
      className={cn('mb-3 flex items-center justify-center gap-4', className)}
    >
      <div className="flex gap-2">
        {badgeProps.map((badge, index) => (
          <Badge key={`badge-hr-group-badge-${index}`} {...badge}>
            {badge.children}
          </Badge>
        ))}
      </div>
      <Hr {...hrProps} className={cn('my-0', hrProps.className)} />
    </div>
  );
}
