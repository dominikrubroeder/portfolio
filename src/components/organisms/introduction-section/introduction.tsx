import React from 'react';
import { cn } from '@/lib/utils';
import AccordionClean from '@/components/atoms/accordion-clean';
import Mindset from '@/components/organisms/introduction-section/mindset';
import Books from '@/components/molecules/books/books';
import TechStack from '@/components/organisms/introduction-section/tech-stack';
import Vision from '@/components/organisms/introduction-section/vision';

export default function Introduction({ className }: { className?: string }) {
  return (
    <div className={cn('mx-auto w-full max-w-screen-sm space-y-6', className)}>
      <p>
        Hey there <span className="ml-1 inline-block rotate-45">=)</span>
      </p>

      <h2 className="text-wrap font-bold text-foreground">
        My work is committed to the frontend. I like to create and build dynamic
        interfaces that are designed to be for a joyful Web.
      </h2>

      <AccordionClean title="More about my vision">
        <Vision />
      </AccordionClean>

      <AccordionClean title="Things i like">
        <Mindset />
      </AccordionClean>

      <AccordionClean title="Books">
        <Books />
      </AccordionClean>

      <AccordionClean title="My tech stack">
        <TechStack />
      </AccordionClean>
    </div>
  );
}
