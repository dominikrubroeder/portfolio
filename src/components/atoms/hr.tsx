import { cn } from '@/lib/utils';

export function Hr({
  variant = 'md',
  className
}: {
  variant?: 'sm' | 'md' | 'lg';
  className?: string;
}) {
  return (
    <hr
      className={cn(
        'mx-auto',
        variant === 'md' && 'sm:max-w-(--readable-container)',
        className
      )}
    />
  );
}
