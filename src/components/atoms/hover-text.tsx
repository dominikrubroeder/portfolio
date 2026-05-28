import { cn } from '@/lib/utils';

interface HoverTextProps {
  text: string;
  className?: string;
}

export function HoverText({ text, className }: HoverTextProps) {
  return (
    <span className={cn('inline-flex flex-wrap', className)}>
      {[...text].map((ch, i) =>
        ch === ' ' ? (
          <span key={i} className="whitespace-pre select-none">
            {' '}
          </span>
        ) : (
          <span
            key={i}
            className="inline-block cursor-default text-muted-foreground transition-colors duration-150 ease-out select-none hover:text-primary"
          >
            {ch}
          </span>
        )
      )}
    </span>
  );
}
