import { cn } from '@/lib/utils';

import { DesignTokenIcon } from '@/components/atoms/svg/design-token-icon';

export function AtomIcon({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'relative size-10 rounded-full border-4 border-primary bg-background transition-all group-hover:animate-spin hover:animate-spin',
        className
      )}
    >
      <DesignTokenIcon className="absolute -top-[6px] -right-[2px]" />
    </div>
  );
}
