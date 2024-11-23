import WhatIsAUxEngineer from '@/components/organisms/introduction-section/what-is-a-ux-engineer';
import UxDesigner from '@/components/organisms/introduction-section/ux-designer';
import UxEngineer from '@/components/organisms/introduction-section/ux-engineer';
import DesignEngineerVsUxEngineer from '@/components/organisms/introduction-section/design-engineer-vs-ux-engineer';
import React from 'react';
import Accordion from '@/components/atoms/accordion';

export default function FaqSection() {
  return (
    <div className="mx-auto w-full max-w-screen-sm px-4" id="accordion-group">
      <WhatIsAUxEngineer />
      <UxDesigner />
      <UxEngineer />
      <DesignEngineerVsUxEngineer />
      <Accordion
        title="Community Notes"
        aria-label="Community Notes"
        restrictHeight
      >
        <div className="space-y-4">
          <ol className="list-decimal pl-5">
            <li>
              <div>
                <b className="text-foreground">Guillermo Rauch</b> CEO and
                Founder of Vercel, Next.js
              </div>
            </li>
          </ol>
        </div>
      </Accordion>
    </div>
  );
}
