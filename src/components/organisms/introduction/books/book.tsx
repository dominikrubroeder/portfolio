import type { Book } from '@/components/organisms/introduction/books/types';
import AnimatedProgress from '@/components/atoms/animated-progress';

export function Book({ book }: { book: Book }) {
  return (
    <div className="flex gap-4 py-1">
      <AnimatedProgress size={32} strokeWidth={5} progress={book.progress} />
      <h3 className="space-x-2 text-base font-normal">
        <b className="text-foreground">{book.title}</b>
        <span>–</span>
        <span className="text-muted-foreground">
          <i>by {book.author}</i>
        </span>
      </h3>
    </div>
  );
}
