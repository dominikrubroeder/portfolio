import React from 'react';
import Introduction from '@/components/organisms/introduction-section/introduction';

export default function IntroductionSection() {
  return (
    <section
      className="scroll-mt-24 space-y-8 px-4 md:scroll-mt-32"
      id="introduction"
    >
      <Introduction />
    </section>
  );
}
