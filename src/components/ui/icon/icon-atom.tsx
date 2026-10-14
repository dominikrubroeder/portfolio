import { IconDesignToken } from '@/components/ui/icon/icon-design-token';

import { cn } from '@/lib/utils';

export function IconAtom({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'relative size-10 rounded-full border-4 border-primary bg-background motion-safe:transition-all group-hover:motion-safe:animate-spin hover:motion-safe:animate-spin',
        className
      )}
    >
      <IconDesignToken className="absolute -top-[6px] -right-[2px]" />
    </div>
  );
}
