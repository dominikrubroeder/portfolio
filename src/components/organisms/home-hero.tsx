import React from 'react';
import { Marker } from '@/components/atoms/marker';
import ButtonScrollToIntroduction from '@/components/atoms/button-scroll-to-introduction';
import ButtonContactMe from '@/components/atoms/button-contact-me';
import { Shapes } from '@/components/atoms/svg';
import {
  AnimateToggle,
  CleanViewToggle,
  DesignModeToggle,
  DevModeToggle
} from '@/components/atoms/toggle';

export default function HomeHero() {
  return (
    <section
      id="hero"
      className="max-w-(--breakpoint-sm) mx-auto flex items-center justify-center space-y-4 px-4 pb-14 pt-8 lg:min-h-[78svh] lg:px-0"
    >
      <Shapes className="absolute inset-0 -z-10" />

      <div className="absolute right-32 top-4 space-y-4">
        <DesignModeToggle className="justify-end" />
        <DevModeToggle className="justify-end" />
        <AnimateToggle className="justify-end" />
        <CleanViewToggle className="justify-end" />
      </div>

      <div className="space-y-6">
        <h2 className="text-foreground text-7xl font-bold">
          Team <Marker animate>Frontend</Marker>.
        </h2>

        <div className="space-y-8">
          <p className="text-primary mx-1 text-xl font-bold leading-relaxed">
            Building applications by code, design and psychological principles.
            <Marker className="ml-2" color="purple" animate>
              I love interfaces that just work.
            </Marker>
            Together with a little bit of psychology, we build a better user
            experience.
          </p>

          <div className="space-x-3">
            <ButtonScrollToIntroduction />
            <ButtonContactMe />
          </div>
        </div>
      </div>
    </section>
  );
}
