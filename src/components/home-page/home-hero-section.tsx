import React, { Suspense } from 'react';
import ControlBar from '@/components/navigation/control-bar/control-bar';

const sections = [
  { id: 'header', label: '', icon: 'HomeIcon' },
  { id: 'introduction', label: 'Introduction', icon: 'ArrowRightCircleIcon' },
  { id: 'projects', label: 'Projects', icon: 'DocumentDuplicateIcon' },
  { id: 'tools', label: 'Tools', icon: 'PaintBrushIcon' },
  { id: 'technologies', label: 'Technologies', icon: 'Cog6ToothIcon' },
  { id: 'socials', label: 'Socials', icon: 'CheckBadgeIcon' },
  { id: 'mail', label: '', icon: 'EnvelopeIcon' },
  { id: 'header', label: '', icon: 'ArrowUpIcon' }
];

export default function HomeHeroSection() {
  return (
    <>
      <section
        id="hero"
        className="mx-auto sm:flex sm:items-center sm:justify-center md:min-h-[80svh]"
      >
        <div className="p-4">
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
