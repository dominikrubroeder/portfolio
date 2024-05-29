import WhatIsAUxEngineer from '@/components/sections/introduction-section/what-is-a-ux-engineer';
import HeyChatGptUxDesigner from '@/components/sections/introduction-section/hey-chat-gpt-ux-designer';
import HeyChatGptUxEngineer from '@/components/sections/introduction-section/hey-chat-gpt-ux-engineer';
import DesignEngineerVsUxEngineer from '@/components/sections/introduction-section/design-engineer-vs-ux-engineer';
import React from 'react';
import Books from '@/components/sections/introduction-section/books';
import Mindset from '@/components/sections/introduction-section/mindset';
import Section from '@/components/sections/introduction-section/section';
import Introduction from '@/components/sections/introduction-section/introduction';

export default function IntroductionSection() {
  return (
    <section
      className="grid gap-16 px-4 py-12 pt-28 md:pt-32"
      id="introduction"
    >
      <section className="mx-auto mb-16 w-full max-w-screen-sm">
        <div>
          <h2 className="text-7xl font-bold text-theme-contrary sm:text-8xl">
            Team Frontend.
          </h2>

          <p className="max-w-screen-sm">
            <span className="mx-1 text-6xl font-bold text-violet-400 sm:text-6xl">
              UX and UI with passion
              <br /> Love for supportive animations and smooth transitions.
            </span>
          </p>

          <hr className="my-4" />

          <p>Designed with code in mind – Coded, by design</p>
        </div>
      </section>

      <Section headline="Introduction" showHeadlineMobileOnly>
        <Introduction />
      </Section>

      <Section headline="Mindset">
        <Mindset />
      </Section>

      <Section headline="Books">
        <Books />
      </Section>

      <Section headline="Blog">
        <div>Blog here</div>
      </Section>

      <div className="mx-auto w-full max-w-screen-sm" id="accordion-group">
        <WhatIsAUxEngineer />
        <HeyChatGptUxDesigner />
        <HeyChatGptUxEngineer />
        <DesignEngineerVsUxEngineer />
      </div>
    </section>
  );
}
