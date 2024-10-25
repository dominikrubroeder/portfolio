import type { Book } from '@/components/molecules/books/types';
import AnimatedProgress from '@/components/atoms/animated-progress';

export default function Book({ book }: { book: Book }) {
  return (
    <div className="flex gap-4 py-1">
      <AnimatedProgress size={32} strokeWidth={5} progress={book.progress} />
      <div className="space-x-2">
        <span>{book.title}</span>
        <span>–</span>
        <span>
          <i>{book.author}</i>
        </span>
      </div>
    </div>
  );
}
