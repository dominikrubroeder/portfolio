import { AnimatedProgress } from '@/components/atoms/animated-progress';
import { ExternalLink } from '@/components/atoms/external-link';
import type { Book } from '@/components/organisms/books/types';

export function Book({ book }: { book: Book }) {
  return (
    <div className="group flex gap-3 rounded py-2 transition-all hover:bg-muted hover:px-2.5 sm:items-center">
      <AnimatedProgress size={32} strokeWidth={5} progress={book.progress} />

      <ExternalLink href={book.href} variant="unstyled">
        <h3 className="mb-0.5 space-x-2 text-base font-normal md:mb-1">
          <b className="text-foreground">{book.title}</b>
          <span>–</span>
          <span className="text-muted-foreground">
            <i>by {book.author}</i>
          </span>
        </h3>
      </ExternalLink>
    </div>
  );
}
