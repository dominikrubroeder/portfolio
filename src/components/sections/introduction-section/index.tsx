import WhatIsAUxEngineer from '@/components/sections/introduction-section/what-is-a-ux-engineer';
import UxDesigner from '@/components/sections/introduction-section/ux-designer';
import UxEngineer from '@/components/sections/introduction-section/ux-engineer';
import DesignEngineerVsUxEngineer from '@/components/sections/introduction-section/design-engineer-vs-ux-engineer';
import React from 'react';
import Books from '@/components/sections/introduction-section/books';
import Mindset from '@/components/sections/introduction-section/mindset';
import Introduction from '@/components/sections/introduction-section/introduction';
import TechStack from '@/components/sections/introduction-section/tech-stack';

export default function IntroductionSection() {
  return (
    <section className="space-y-16 px-4 md:pt-32" id="introduction">
      <Introduction />

      <Mindset />

      <Books />

      <TechStack />

      <div className="mx-auto w-full max-w-screen-sm" id="accordion-group">
        <WhatIsAUxEngineer />
        <UxDesigner />
        <UxEngineer />
        <DesignEngineerVsUxEngineer />
      </div>
    </section>
  );
}
