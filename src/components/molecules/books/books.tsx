import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import { cn } from '@/lib/utils';
import { books } from '@/components/molecules/books/data';
import { Book } from '@/components/molecules/books';

export default function Books({ className }: { className?: string }) {
  return (
    <div className={cn('mx-auto w-full max-w-screen-sm space-y-6', className)}>
      <h3>Books</h3>

      <ul className="space-y-4 leading-relaxed">
        {books.map((book) => (
          <li key={book.title}>
            {book.href ? (
              <Link
                href={book.href}
                className="flex items-start justify-between gap-4 rounded-xl px-0 py-1 transition-all hover:bg-hover hover:px-2 md:items-center"
              >
                <Book book={book} />
                <div className="flex items-center gap-2">
                  <ArrowRightIcon className="mt-1.5 size-5 shrink-0 md:mt-0" />
                </div>
              </Link>
            ) : (
              <Book book={book} />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
