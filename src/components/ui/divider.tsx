import { DotsDivider } from '@/components/ui/dots-divider';

import { cn } from '@/lib/utils';

export function Divider({
  variant = 'hr',
  indented,
  spacing = 'wider',
  className,
  animate = true
}: {
  variant?: 'hr' | 'three-dotted' | 'dot';
  indented?: boolean;
  spacing?: 'wider' | 'widest';
  className?: string;
  animate?: boolean;
}) {
  if (variant === 'dot') {
    return (
      <span
        className={cn(
          'size-1 shrink-0 rounded-full border-muted-foreground bg-muted-foreground',
          className
        )}
      />
    );
  }

  if (variant === 'three-dotted') {
    return <DotsDivider className={className} animate={animate} />;
  }

  return (
    <hr
      className={cn(
        'my-4 w-full',
        spacing === 'wider' && 'my-8',
        spacing === 'widest' && 'my-12',
        indented && 'ml-16',
        className
      )}
    />
  );
}
