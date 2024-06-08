'use client';

import { ArrowDownIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import { useScrollIntoView } from '@/hooks/useScrollIntoView';

export default function ContactRow() {
  const { scrollIntoView } = useScrollIntoView();
  return (
    <div className="mx-auto mt-4 flex w-full max-w-screen-sm items-center justify-center gap-4 border-t border-gray-5 py-4 text-center md:mt-8 md:py-8">
      <a
        href="mailto:dominik.rubroeder@icloud.com?subject=I want to write you about..."
        className="flex items-center gap-2 rounded-2xl bg-accent px-4 py-3 text-white transition-all hover:rounded-xl hover:bg-violet-500"
      >
        <EnvelopeIcon className="size-4 shrink-0" /> Contact
      </a>

      <button
        className="relative flex items-center gap-2 rounded-2xl px-4 py-3 transition after:absolute after:inset-0 after:z-0 after:scale-75 after:rounded-lg after:bg-gray-5 after:opacity-0 after:transition after:content-[''] hover:after:scale-100 hover:after:rounded-xl hover:after:opacity-100"
        onClick={() => scrollIntoView('mindset')}
      >
        <span className="z-10">Go further</span>
        <ArrowDownIcon className="z-10 size-4 shrink-0" />
      </button>
    </div>
  );
}
