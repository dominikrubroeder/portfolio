import Accordion from '@/components/ui/accordion';
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/solid';

const books: { title: string; author: string; href: string | undefined }[] = [
  {
    title: 'The Design of Everyday Things',
    author: 'Don Norman',
    href: undefined
  },
  {
    title: 'Refactoring UI',
    author: 'Adam Wathan, Steve Schoger',
    href: undefined
  },
  {
    title: 'Practical UI',
    author: 'Adham Dannaway',
    href: undefined
  }
];

export default function Books() {
  return (
    <Accordion title="Books">
      <h3 className="font-bold text-theme-contrary">Book recommendations</h3>

      <br />

      <ul className="mb-5 list-disc pl-8 leading-loose">
        <li>
          The Design of Everyday Things – <i>Don Norman</i>
        </li>
        <li>
          Refactoring UI – <i>Adam Wathan, Steve Schoger</i>
        </li>
        <li>
          Practical UI – <i>Adham Dannaway</i>
        </li>
        <li>
          <Link
            href="/book/the-path-to-senior-product-designer"
            className="flex items-center justify-between gap-4 rounded-xl px-0 transition-all hover:bg-gray-5 hover:px-2"
          >
            <p>
              The Path to Senior Product Designer – <i>Artiom Dashinsky</i>
            </p>
            <ArrowRightIcon className="size-4" />
          </Link>
        </li>
        <li>
          Atomic Design – <i>Brad Frost</i>
        </li>
        <li>
          Laws of UX – <i>Jon Yablonski</i>
        </li>
        <li>
          User Friendly – <i>Cliff Kuang with Robert Fabricant</i>
        </li>
        <li>
          Neurowebdesign – <i>Jonas Reggelin</i>
        </li>
        <li>
          The Creative Act: A Way of Being – <i>Rick Rubin</i>
        </li>
      </ul>
    </Accordion>
  );
}
