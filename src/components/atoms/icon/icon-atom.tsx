import { cn } from '@/lib/utils';

import { IconDesignToken } from '@/components/atoms/icon/icon-design-token';

export function IconAtom({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'relative size-10 rounded-full border-4 border-primary bg-background transition-all group-hover:motion-safe:animate-spin hover:motion-safe:animate-spin',
        className
      )}
    >
      <IconDesignToken className="absolute -top-[6px] -right-[2px]" />
    </div>
  );
}
