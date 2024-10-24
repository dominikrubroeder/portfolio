import WhatIsAUxEngineer from '@/components/sections/introduction-section/what-is-a-ux-engineer';
import UxDesigner from '@/components/sections/introduction-section/ux-designer';
import UxEngineer from '@/components/sections/introduction-section/ux-engineer';
import DesignEngineerVsUxEngineer from '@/components/sections/introduction-section/design-engineer-vs-ux-engineer';
import React from 'react';
import Introduction from '@/components/sections/introduction-section/introduction';

export default function IntroductionSection() {
  return (
    <section className="scroll-mt-32 space-y-8 px-4" id="introduction">
      <Introduction />

      <div className="mx-auto w-full max-w-screen-sm" id="accordion-group">
        <WhatIsAUxEngineer />
        <UxDesigner />
        <UxEngineer />
        <DesignEngineerVsUxEngineer />
      </div>
    </section>
  );
}
