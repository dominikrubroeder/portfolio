import React from 'react';
import AccordionClean from '@/components/atoms/accordion-clean';
import Vision from '@/components/organisms/introduction/vision';
import Mindset from '@/components/organisms/introduction/mindset';
import Books from '@/components/molecules/books';
import TechStack from '@/components/organisms/introduction/tech-stack';
import WhatIsAUxEngineer from '@/components/organisms/introduction/what-is-a-ux-engineer';
import UxDesigner from '@/components/organisms/introduction/ux-designer';
import UxEngineer from '@/components/organisms/introduction/ux-engineer';
import DesignEngineerVsUxEngineer from '@/components/organisms/introduction/design-engineer-vs-ux-engineer';

export default function IntroductionSection() {
  return (
    <section
      className="scroll-mt-24 space-y-8 px-4 md:scroll-mt-32"
      id="introduction"
    >
      <div className="max-w-(--breakpoint-sm) mx-auto w-full space-y-6">
        <p>Hey there!</p>

        <h2 className="text-wrap">
          <b className="text-foreground mr-1.5">
            My work is committed to the frontend. I like to create and build
            dynamic interfaces that are designed to be for a joyful and
            interactive web
          </b>
          – later on, native mobile apps might join that paradigm.
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

      <div
        className="max-w-(--breakpoint-sm) mx-auto w-full"
        id="accordion-group"
      >
        <WhatIsAUxEngineer />
        <UxDesigner />
        <UxEngineer />
        <DesignEngineerVsUxEngineer />
      </div>
    </section>
  );
}
