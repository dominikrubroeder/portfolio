import WhatIsAUxEngineer from '@/components/organisms/introduction-section/what-is-a-ux-engineer';
import UxDesigner from '@/components/organisms/introduction-section/ux-designer';
import UxEngineer from '@/components/organisms/introduction-section/ux-engineer';
import DesignEngineerVsUxEngineer from '@/components/organisms/introduction-section/design-engineer-vs-ux-engineer';
import React from 'react';

export default function FaqSection() {
  return (
    <div className="mx-auto w-full max-w-screen-sm px-4" id="accordion-group">
      <WhatIsAUxEngineer />
      <UxDesigner />
      <UxEngineer />
      <DesignEngineerVsUxEngineer />
    </div>
  );
}
