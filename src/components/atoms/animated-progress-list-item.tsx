import { AnimatedProgress } from '@/components/atoms/animated-progress';
import { Badge } from '@/components/atoms/badge';
import { ExternalLink } from '@/components/atoms/external-link';
import type { LearningResource } from '@/components/organisms/training';

export function AnimatedProgressListItem({ item }: { item: LearningResource }) {
  return (
    <div className="group flex gap-3 rounded bg-background py-2 transition-all hover:-mx-2.5 hover:bg-muted hover:px-2 active:scale-[0.98] sm:items-center">
      <AnimatedProgress size={32} strokeWidth={5} progress={item.progress} />

      <ExternalLink
        href={item.href}
        variant="unstyled"
        className="w-full justify-between"
      >
        <h3 className="mb-0.5 flex-1 space-x-2 text-base font-normal md:mb-1">
          {item.isCurrent && <Badge size="small">Currently</Badge>}
          <b className="text-foreground">{item.title}</b>
          <span className="relative block text-muted-foreground">
            <i>by {item.author}</i>
          </span>
        </h3>
      </ExternalLink>
    </div>
  );
}
