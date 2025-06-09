import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import { cn } from '@/lib/utils';
import { Book, books } from '@/components/organisms/introduction/books';
import { Ul } from '@/components/atoms/ul';
import { Accordion } from '@/components/atoms/accordion';

export function BooksAccordion({ className }: { className?: string }) {
  return (
    <Accordion title="Books">
      <Ul className={cn('list-none space-y-4 pl-0 leading-relaxed', className)}>
        {books
          .sort((a, b) => b.progress - a.progress)
          .map((book) => (
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
      </Ul>
    </Accordion>
  );
}
