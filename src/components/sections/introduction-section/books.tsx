import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import AnimatedProgress from '@/components/atoms/animated-progress';
import { cn } from '@/lib/utils';

export interface Book {
  title: string;
  author: string;
  href: string | undefined;
  new: boolean | undefined;
  progress: number;
}

const books: Book[] = [
  {
    title: 'The Design of Everyday Things',
    author: 'Don Norman',
    href: undefined,
    new: undefined,
    progress: 100
  },
  {
    title: 'Refactoring UI',
    author: 'Adam Wathan, Steve Schoger',
    href: undefined,
    new: undefined,
    progress: 100
  },
  {
    title: 'Practical UI',
    author: 'Adham Dannaway',
    href: undefined,
    new: undefined,
    progress: 20
  },
  {
    title: 'The Path to Senior Product Designer',
    author: 'Artiom Dashinsky',
    href: '/book/the-path-to-senior-product-designer',
    new: true,
    progress: 100
  },
  {
    title: 'Articulating Design Decisions',
    author: 'Tom Greever',
    href: undefined,
    new: undefined,
    progress: 0
  },
  {
    title: 'Atomic Design',
    author: 'Brad Frost',
    href: undefined,
    new: undefined,
    progress: 20
  },
  {
    title: 'Laws of UX',
    author: 'Jon Yablonski',
    href: undefined,
    new: undefined,
    progress: 10
  },
  {
    title: 'User Friendly',
    author: 'Cliff Kuang with Robert Fabricant',
    href: undefined,
    new: undefined,
    progress: 0
  },
  {
    title: 'Neurowebdesign',
    author: 'Jonas Reggelin',
    href: undefined,
    new: undefined,
    progress: 0
  },
  {
    title: 'The Creative Act: A Way of Being',
    author: 'Rick Rubin',
    href: undefined,
    new: undefined,
    progress: 0
  }
];

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

function Book({ book }: { book: Book }) {
  return (
    <div className="flex gap-4 py-1">
      <AnimatedProgress
        size={32}
        strokeWidth={5}
        progress={book.progress}
        highlightCompletion={true}
      />
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
