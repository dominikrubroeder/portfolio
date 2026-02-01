import { cn } from '@/lib/utils';

import { IconAtom } from '@/components/atoms/icon/icon-atom';

export function OrganismnIcon({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'group relative flex items-center rounded bg-background',
        className
      )}
    >
      <IconAtom className="absolute top-0 -left-2 scale-x-[-1] bg-transparent" />
      <IconAtom className="absolute top-0 -right-2 bg-transparent" />
      <IconAtom className="absolte -bottom-4 left-1/2 -translate-x-1/2 rotate-[135deg] bg-transparent" />
    </div>
  );
}
