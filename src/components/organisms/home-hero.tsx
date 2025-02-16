import React from 'react';
import { Marker } from '@/components/atoms/marker';
import ButtonScrollToIntroduction from '@/components/atoms/button-scroll-to-introduction';
import ButtonContactMe from '@/components/atoms/button-contact-me';

export default function HomeHero() {
  return (
    <section
      id="hero"
      className="mx-auto flex max-w-(--breakpoint-sm) items-center justify-center space-y-4 px-4 pt-8 pb-14 lg:min-h-[78svh] lg:px-0"
    >
      <div className="space-y-6">
        <h2 className="text-7xl font-bold text-foreground">
          Team <Marker animate>Frontend</Marker>.
        </h2>

        <div className="space-y-8">
          <div className="mx-1 space-y-2 text-xl leading-relaxed font-bold text-primary">
            <p>
              Passionate about creating and building applications for the web by
              code, design and psychological principles.
            </p>
            <p>
              Connecting several systems together into one user interface is
              something crucial and centric for me as a Design Engineer.
            </p>
            <p>
              Plus, i love interfaces that just work and feel seamless, where it
              fit's the use case and fulfills the purpose of the task. Together
              with a little bit of psychology, we build a better user
              experience!
            </p>
          </div>

          <div className="space-x-3">
            <ButtonScrollToIntroduction />
            <ButtonContactMe />
          </div>
        </div>
      </div>
    </section>
  );
}
