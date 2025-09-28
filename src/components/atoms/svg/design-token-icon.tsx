import { cn } from '@/lib/utils';

export function DesignTokenIcon({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'flex size-4 items-center justify-center rounded-full bg-background',
        className
      )}
    >
      <div className="size-2.5 rounded-full bg-primary" />
    </div>
  );
}
