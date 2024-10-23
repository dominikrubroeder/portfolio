import WhatIsAUxEngineer from '@/components/sections/introduction-section/what-is-a-ux-engineer';
import HeyChatGptUxDesigner from '@/components/sections/introduction-section/hey-chat-gpt-ux-designer';
import HeyChatGptUxEngineer from '@/components/sections/introduction-section/hey-chat-gpt-ux-engineer';
import DesignEngineerVsUxEngineer from '@/components/sections/introduction-section/design-engineer-vs-ux-engineer';
import React from 'react';
import Books from '@/components/sections/introduction-section/books';
import Mindset from '@/components/sections/introduction-section/mindset';
import Introduction from '@/components/sections/introduction-section/introduction';
import ContactRow from '../contact-row';

export default function IntroductionSection() {
  return (
    <section className="grid gap-16 px-4 md:pt-32" id="introduction">
      <Introduction />

      <ContactRow />

      <Mindset />

      <Books />

      <div className="mx-auto w-full max-w-screen-sm" id="accordion-group">
        <WhatIsAUxEngineer />
        <HeyChatGptUxDesigner />
        <HeyChatGptUxEngineer />
        <DesignEngineerVsUxEngineer />
      </div>
    </section>
  );
}
