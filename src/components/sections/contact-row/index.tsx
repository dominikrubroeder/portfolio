'use client';

import { ArrowDownIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import { useScrollIntoView } from '@/hooks/useScrollIntoView';
import Button from '@/components/atoms/button';

export default function ContactRow() {
  const { scrollIntoView } = useScrollIntoView();
  return (
    <div className="mx-auto mt-4 flex w-full max-w-screen-sm items-center justify-center gap-4 border-t border-gray-5 py-4 text-center md:mt-8 md:py-8">
      <Button
        priority="primary"
        asLink
        href="mailto:dominik.rubroeder@icloud.com?subject=I want to write you about..."
      >
        <EnvelopeIcon className="size-4 shrink-0" /> Contact
      </Button>

      <Button priority="secondary" onClick={() => scrollIntoView('mindset')}>
        <span className="z-10">Go further</span>
        <ArrowDownIcon className="z-10 size-4 shrink-0" />
      </Button>
    </div>
  );
}
