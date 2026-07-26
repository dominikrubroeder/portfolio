import { LogoProps } from '@/components/atoms/logo';
import { cn } from '@/lib/utils';

export function IconTheProductEngineeringSweetSpotAnimated({
  id,
  className
}: LogoProps) {
  return (
    <div id={id} className={cn('my-4 flex items-center', className)}>
      <div className="group flex size-80 shrink-0 items-center justify-center rounded-full border-2 border-foreground text-foreground transition hover:bg-primary hover:text-primary-foreground">
        <span className="group-hover:hidden">Design</span>
        <span className="hidden text-center group-hover:grid">
          <span>Research</span>
          <span>Concept</span>
          <span>Visualization</span>
        </span>
      </div>

      <div className="relative z-10 -mx-4 flex size-12 shrink-0 items-center justify-center rounded-full border-2 border-foreground bg-background">
        <div className="size-6 shrink-0 rounded-full bg-primary" />
      </div>

      <div className="group flex size-80 shrink-0 items-center justify-center rounded-full border-2 border-foreground text-foreground transition hover:bg-primary hover:text-primary-foreground">
        <span className="group-hover:hidden">Code</span>
        <span className="hidden text-center group-hover:grid">
          <span>Perform</span>
          <span>Build</span>
          <span>Function</span>
        </span>
      </div>
    </div>
  );
}
