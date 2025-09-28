import { cn } from '@/lib/utils';

export function Overlay({
  onClick,
  className
}: {
  onClick: () => void;
  className?: string;
}) {
  return (
    <div
      className={cn('fixed inset-0 top-20 z-40 bg-black/20', className)}
      onClick={onClick}
    />
  );
}
