import { cn } from '@/lib/utils';

export function Hr({ className }: { className?: string }) {
  return <hr className={cn(className)} />;
}
