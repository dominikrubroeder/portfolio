import { cn } from '@/utils';

export default function Divider({
  className,
  indented,
  spacing
}: {
  className?: string;
  indented?: boolean;
  spacing?: 'wider' | 'widest';
}) {
  return (
    <hr
      className={cn(
        'my-4',
        spacing === 'wider' && 'my-8',
        spacing === 'widest' && 'my-12',
        indented && 'ml-16',
        className
      )}
    />
  );
}
