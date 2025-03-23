import type { Book } from '@/components/organisms/introduction/books/types';
import AnimatedProgress from '@/components/atoms/animated-progress';

export function Book({ book }: { book: Book }) {
  return (
    <div className="flex gap-4 py-1">
      <AnimatedProgress size={32} strokeWidth={5} progress={book.progress} />
      <div className="space-x-2">
        <b className="text-foreground">{book.title}</b>
        <span>–</span>
        <span>
          <i>by {book.author}</i>
        </span>
      </div>
    </div>
  );
}
