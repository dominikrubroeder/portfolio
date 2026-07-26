import { cn } from '@/lib/utils';

export function Divider({
  variant = 'hr',
  indented,
  spacing = 'wider',
  className
}: {
  variant?: 'hr' | 'three-dotted';
  indented?: boolean;
  spacing?: 'wider' | 'widest';
  className?: string;
}) {
  if (variant === 'three-dotted') {
    return (
      <div
        className={cn(
          'my-6 flex w-full items-center justify-center gap-3',
          className
        )}
      >
        <span className="size-2 shrink-0 rounded-full border bg-muted" />
        <span className="size-2 shrink-0 rounded-full border bg-muted" />
        <span className="size-2 shrink-0 rounded-full border bg-muted" />
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
