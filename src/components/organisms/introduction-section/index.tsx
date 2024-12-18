import React from 'react';
import AccordionClean from '@/components/atoms/accordion-clean';
import Vision from '@/components/organisms/introduction-section/vision';
import Mindset from '@/components/organisms/introduction-section/mindset';
import Books from '@/components/molecules/books';
import TechStack from '@/components/organisms/introduction-section/tech-stack';
import Button from '@/components/atoms/button';

export default function IntroductionSection() {
  return (
    <section
      className="scroll-mt-24 space-y-8 px-4 md:scroll-mt-32"
      id="introduction"
    >
      <div className="mx-auto w-full max-w-screen-sm space-y-6">
        <p>Hey there!</p>

        <h2 className="text-wrap font-bold text-foreground">
          My work is committed to the frontend. I like to create and build
          dynamic interfaces that are designed to be for a joyful Web.
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

        <div className="flex flex-wrap gap-2">
          <Button variant="primary">Watch my Design System</Button>
          <Button variant="outline">Watch my GitHub Repo</Button>
        </div>

        <hr />

        <AccordionClean title="Design Principles">
          <p>Define here</p>
        </AccordionClean>

        <AccordionClean title="Code Principles">
          <p>Define here</p>
        </AccordionClean>

        <AccordionClean title="Psychological Principles">
          <p>Define here</p>
        </AccordionClean>
      </div>
    </section>
  );
}
