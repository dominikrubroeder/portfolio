import React from 'react';
import AccordionClean from '@/components/atoms/accordion-clean';
import Vision from '@/components/organisms/introduction/vision';
import Mindset from '@/components/organisms/introduction/mindset';
import Books from '@/components/molecules/books';
import ImageSlideIn from '@/components/atoms/ImageSlideIn';
import TechStack from '@/components/organisms/introduction/tech-stack';

export default function IntroductionSection() {
  return (
    <section
      className="scroll-mt-24 space-y-8 px-4 md:scroll-mt-32"
      id="introduction"
    >
      <div className="mx-auto w-full max-w-(--breakpoint-sm) space-y-6">
        <div className="flex items-center gap-2.5">
          Hey there!
          <ImageSlideIn />
        </div>

        <h2 className="text-wrap">
          <b className="mr-1.5 text-foreground">
            My work is committed to the frontend. I like to create and build
            dynamic interfaces that are designed to be for a joyful and
            interactive web
          </b>
          – later on, native mobile apps might join that paradigm.
        </h2>

        <AccordionClean title="More about my vision" open>
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
    </section>
  );
}
