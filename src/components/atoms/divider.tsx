import { cn } from '@/lib/utils';

export function Divider({
  className,
  indented,
  spacing = 'wider'
}: {
  className?: string;
  indented?: boolean;
  spacing?: 'wider' | 'widest';
}) {
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
