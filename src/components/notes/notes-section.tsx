import Mindset from '@/components/notes/mindset';
import UxRole from '@/components/notes/ux-role';
import Books from '@/components/notes/books';
import UxPredicatesDesigner from '@/components/notes/ux-predicates-designer';
import UxPredicatesUxEngineer from '@/components/notes/ux-predicates-ux-engineer';
import DesignEngineerVsUxEngineer from '@/components/notes/design-engineer-vs-ux-engineer';
import { ArrowLongRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import React from 'react';

export default function NotesSection() {
  return (
    <section className="space-y-16 px-4 py-12">
      <div className="mx-auto max-w-2xl">
        <UxRole />
        <Mindset />
        <Books />
        <UxPredicatesDesigner />
        <UxPredicatesUxEngineer />
        <div className="pt-4">
          <DesignEngineerVsUxEngineer />
        </div>
      </div>

      <Link
        href="/how-i-work"
        className="mx-auto flex min-w-44 max-w-max items-center justify-between gap-4 rounded-full bg-gray-5 p-3 px-5 transition hover:bg-gray-4"
        title="Link to how i work page"
        aria-label="Link to How i work page"
      >
        <span className="font-bold text-violet-400">How i work</span>
        <ArrowLongRightIcon className="h-4 w-4" />
      </Link>
    </section>
  );
}
