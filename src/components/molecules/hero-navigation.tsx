import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/16/solid';

export function HeroNavigation() {
  return (
    <ul className="mx-auto mb-0 max-w-(--container) space-y-6 px-4">
      <li className="border-b pb-6">
        <Link
          href="/introduction"
          className="group flex items-center justify-between gap-2 sm:inline-flex sm:gap-4"
        >
          <div className="text-4xl font-black text-foreground xs:text-5xl sm:text-6xl">
            Introduction
          </div>
          <ArrowRightIcon className="size-8 text-primary sm:size-10" />
        </Link>
      </li>
      <li className="border-b pb-6">
        <Link
          href="/projects"
          className="group flex items-center justify-between gap-2 sm:inline-flex sm:gap-4"
        >
          <div className="text-4xl font-black text-foreground xs:text-5xl sm:text-6xl">
            Projects
          </div>
          <ArrowRightIcon className="size-8 text-primary sm:size-10 sm:translate-y-1/2 sm:opacity-0 sm:transition sm:group-hover:translate-y-0 sm:group-hover:opacity-100" />
        </Link>
      </li>
      <li className="border-b pb-6">
        <Link
          href="/tools"
          className="group flex items-center justify-between gap-2 sm:inline-flex sm:gap-4"
        >
          <div className="text-4xl font-black text-foreground xs:text-5xl sm:text-6xl">
            Tools
          </div>
          <ArrowRightIcon className="size-8 text-primary sm:size-10 sm:translate-y-1/2 sm:opacity-0 sm:transition sm:group-hover:translate-y-0 sm:group-hover:opacity-100" />
        </Link>
      </li>
      <li className="border-b pb-6">
        <Link
          href="/technologies"
          className="group flex items-center justify-between gap-2 sm:inline-flex sm:gap-4"
        >
          <div className="text-4xl font-black text-foreground xs:text-5xl sm:text-6xl">
            Technologies
          </div>
          <ArrowRightIcon className="size-8 text-primary sm:size-10 sm:translate-y-1/2 sm:opacity-0 sm:transition sm:group-hover:translate-y-0 sm:group-hover:opacity-100" />
        </Link>
      </li>
      <li className="border-b pb-6">
        <Link
          href="/showcase"
          className="group flex items-center justify-between gap-2 sm:inline-flex sm:gap-4"
        >
          <div className="text-4xl font-black text-foreground xs:text-5xl sm:text-6xl">
            Showcase
          </div>
          <ArrowRightIcon className="size-8 text-primary sm:size-10 sm:translate-y-1/2 sm:opacity-0 sm:transition sm:group-hover:translate-y-0 sm:group-hover:opacity-100" />
        </Link>
      </li>
      <li className="border-b pb-6">
        <Link
          href="/playground"
          className="group flex items-center justify-between gap-2 sm:inline-flex sm:gap-4"
        >
          <div className="text-4xl font-black text-foreground xs:text-5xl sm:text-6xl">
            Playground
          </div>
          <ArrowRightIcon className="size-8 text-primary sm:size-10 sm:translate-y-1/2 sm:opacity-0 sm:transition sm:group-hover:translate-y-0 sm:group-hover:opacity-100" />
        </Link>
      </li>
      <li>
        <Link
          href="/resources"
          className="group flex items-center justify-between gap-2 sm:inline-flex sm:gap-4"
        >
          <div className="text-4xl font-black text-foreground xs:text-5xl sm:text-6xl">
            Resources
          </div>
          <ArrowRightIcon className="size-8 text-primary sm:size-10 sm:translate-y-1/2 sm:opacity-0 sm:transition sm:group-hover:translate-y-0 sm:group-hover:opacity-100" />
        </Link>
      </li>
    </ul>
  );
}
