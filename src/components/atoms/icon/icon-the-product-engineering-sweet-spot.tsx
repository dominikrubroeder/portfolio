import { LogoProps } from '@/components/atoms/logo';
import { cn } from '@/lib/utils';

export function IconTheProductEngineeringSweetSpot({
  id,
  className
}: LogoProps) {
  return (
    <div id={id} className={cn('flex items-center', className)}>
      <div className="flex size-80 shrink-0 items-center justify-center rounded-full border-2 border-foreground" />

      <div className="relative z-10 -mx-4 flex size-12 shrink-0 items-center justify-center rounded-full border-2 border-foreground">
        <div className="size-6 shrink-0 rounded-full bg-primary" />
      </div>
      <div className="size-80 shrink-0 rounded-full border-2 border-foreground" />
    </div>
  );
}
