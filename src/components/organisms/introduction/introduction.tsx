import React from 'react';
import AccordionClean from '@/components/atoms/accordion-clean';
import Vision from '@/components/organisms/introduction/vision';
import Mindset from '@/components/organisms/introduction/mindset';
import Books from '@/components/molecules/books';
import ImageSlideIn from '@/components/atoms/image-slide-in';
import TechStack from '@/components/organisms/introduction/tech-stack';
import DevModeLabel from '@/components/organisms/introduction/dev-mode-label';
import Animate from '@/components/organisms/animate';

export default function Introduction() {
  return (
    <Animate direction="up">
      <section
        className="scroll-mt-24 space-y-8 px-4 md:scroll-mt-32"
        id="introduction"
      >
        <div className="relative mx-auto w-full space-y-6 rounded border bg-background px-4 py-4 sm:max-w-(--breakpoint-sm)">
          <DevModeLabel>div | introduction.tsx</DevModeLabel>

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

          <ul className="space-y-6">
            <li>
              <AccordionClean title="More about my vision" open>
                <Vision />
              </AccordionClean>
            </li>

            <li>
              <AccordionClean title="Things i like">
                <Mindset />
              </AccordionClean>
            </li>

            <li>
              <AccordionClean title="Books">
                <Books />
              </AccordionClean>
            </li>

            <li>
              <AccordionClean title="My tech stack">
                <TechStack />
              </AccordionClean>
            </li>
          </ul>
        </div>
      </section>
    </Animate>
  );
}
