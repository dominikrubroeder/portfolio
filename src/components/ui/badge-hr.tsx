import { Badge } from '@/components/ui/badge';
import type { BadgeProps } from '@/components/ui/badge';
import { Hr } from '@/components/ui/hr';

export function BadgeHr({ badge }: { badge: BadgeProps }) {
  return (
    <div className="flex items-center justify-center gap-3">
      <Badge {...badge}>{badge.children}</Badge> <Hr className="my-0" />
    </div>
  );
}
