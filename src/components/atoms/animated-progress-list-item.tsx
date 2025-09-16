import { AnimatedProgress } from '@/components/atoms/animated-progress';
import { ExternalLink } from '@/components/atoms/external-link';
import type { LearningResource } from '@/components/organisms/training';

export function AnimatedProgressListItem({ item }: { item: LearningResource }) {
  return (
    <div className="group flex gap-3 rounded py-2 transition-all hover:bg-muted hover:px-2.5 sm:items-center">
      <AnimatedProgress size={32} strokeWidth={5} progress={item.progress} />

      <ExternalLink href={item.href} variant="unstyled">
        <h3 className="mb-0.5 space-x-2 text-base font-normal md:mb-1">
          <b className="text-foreground">{item.title}</b>
          <span>–</span>
          <span className="text-muted-foreground">
            <i>by {item.author}</i>
          </span>
        </h3>
      </ExternalLink>
    </div>
  );
}
