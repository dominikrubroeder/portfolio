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
    return (
      <div
        className={cn(
          'my-6 flex w-full items-center justify-center gap-3',
          className
        )}
      >
        {[0, 250, 500].map((delay) => (
          <span
            key={delay}
            className={cn(
              'size-2 shrink-0 rounded-full border-primary bg-primary',
              animate && delay === 0 && 'animate-dot-bounce-0',
              animate && delay === 250 && 'animate-dot-bounce-250',
              animate && delay === 500 && 'animate-dot-bounce-500'
            )}
          />
        ))}
      </div>
    );
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
