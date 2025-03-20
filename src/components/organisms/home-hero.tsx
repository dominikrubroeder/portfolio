import React from 'react';
import ButtonScrollToIntroduction from '@/components/atoms/button-scroll-to-introduction';
import ButtonContactMe from '@/components/atoms/button-contact-me';
import { DesignModeToggle, DevModeToggle } from '@/components/atoms/toggle';
import AutoModeToggle from '@/components/atoms/toggle/auto-mode-toggle';

export default function HomeHero() {
  return (
    <section
      id="hero"
      className="mx-auto flex items-center justify-center space-y-4 border bg-background px-4 pt-8 pb-14 lg:min-h-[78svh] lg:px-0"
    >
      <div className="space-y-6 sm:max-w-(--breakpoint-sm)">
        <div className="space-y-3 space-x-4">
          <AutoModeToggle className="inline-flex" />
          <DesignModeToggle />
          <DevModeToggle />
        </div>

        <h2 className="text-7xl font-bold text-foreground">Team Frontend.</h2>

        <div className="space-y-8">
          <div className="mx-1 space-y-2 text-xl leading-relaxed font-bold text-primary">
            <p>
              Passionate about designing and building applications for the web.
            </p>
            <p>
              Connecting several systems together into one user interface is
              something crucial and centric for me as a Design Engineer.
            </p>
            <p>
              When doing my work, i like to use code, design and psychology
              principles. Plus, i love interfaces that just work and feel
              seamless, where it fit&apos;s the use case and it fulfills the
              purpose of the overall goal. Together with a little bit of
              psychology, we build and design a better user experience!
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
