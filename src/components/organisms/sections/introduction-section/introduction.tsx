import React from 'react';
import { cn } from '@/lib/utils';
import AccordionClean from '@/components/atoms/accordion-clean';
import Mindset from '@/components/organisms/sections/introduction-section/mindset';
import Books from '@/components/molecules/books/books';
import TechStack from '@/components/organisms/sections/introduction-section/tech-stack';
import Vision from '@/components/organisms/sections/introduction-section/vision';

export default function Introduction({ className }: { className?: string }) {
  return (
    <div className={cn('mx-auto w-full max-w-screen-sm space-y-6', className)}>
      <p>Hey there,</p>

      <h3 className="font-bold text-foreground">
        My work is committed to the frontend. I like to create and build dynamic
        interfaces that are designed to be for a joyful Web
        <span className="ml-1 font-normal text-muted-foreground">
          – later on, native mobile apps might join that paradigm.
        </span>
      </h3>

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
