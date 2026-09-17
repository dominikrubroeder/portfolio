import { Hr } from '@/components/atoms/hr';
import { Badge, BadgeProps } from '@/components/atoms/badge';

export function BadgeHr({ badge }: { badge: BadgeProps }) {
  return (
    <div className="flex items-center justify-center gap-3">
      <Badge {...badge}>{badge.children}</Badge> <Hr className="my-0" />
    </div>
  );
}
