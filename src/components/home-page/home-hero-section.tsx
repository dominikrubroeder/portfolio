import React, { Suspense } from 'react';
import ControlBar from '@/components/navigation/control-bar/control-bar';
import { ControlBarSections } from '@/types';

const sections: ControlBarSections = [
  {
    id: 'header',
    label: 'Start',
    icon: 'HomeIcon',
    className: 'md:hidden',
    defaultActive: true
  },
  {
    id: 'introduction',
    label: 'Introduction',
    icon: 'ArrowRightCircleIcon',
    className: '',
    defaultActive: false
  },
  {
    id: 'projects',
    label: 'Projects',
    icon: 'DocumentDuplicateIcon',
    className: '',
    defaultActive: false
  },
  {
    id: 'tools',
    label: 'Tools',
    icon: 'PaintBrushIcon',
    className: '',
    defaultActive: false
  },
  {
    id: 'technologies',
    label: 'Technologies',
    icon: 'Cog6ToothIcon',
    className: '',
    defaultActive: false
  },
  {
    id: 'socials',
    label: 'Socials',
    icon: 'CheckBadgeIcon',
    className: '',
    defaultActive: false
  }
];

export default function HomeHeroSection() {
  return (
    <>
      <section
        id="hero"
        className="pb-12 pt-6 sm:mx-auto sm:flex sm:items-center sm:justify-center md:min-h-[80svh]"
      >
        <div className="space-y-1 px-4 sm:space-y-0">
          <h2 className="text-6xl font-bold text-foreground sm:text-8xl">
            Team Frontend.
          </h2>
          <p className="mx-1 flex flex-wrap items-center gap-4 space-y-6 text-4xl font-bold text-accent sm:text-6xl">
            Build your vision
          </p>
        </div>
      </section>

      <Suspense>
        <ControlBar sections={sections} collapse={false} />
      </Suspense>
    </>
  );
}
