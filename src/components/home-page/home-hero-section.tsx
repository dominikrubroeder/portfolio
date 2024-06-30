import React, { Suspense } from 'react';
import ControlBar from '@/components/navigation/control-bar/control-bar';

const sections = [
  { id: 'introduction', label: 'Introduction', icon: 'ArrowRightCircleIcon' },
  { id: 'projects', label: 'Projects', icon: 'DocumentDuplicateIcon' },
  { id: 'tools', label: 'Tools', icon: 'PaintBrushIcon' },
  { id: 'technologies', label: 'Technologies', icon: 'Cog6ToothIcon' },
  { id: 'socials', label: 'Socials', icon: 'CheckBadgeIcon' }
];

export default function HomeHeroSection() {
  return (
    <>
      <section className="mx-auto flex w-full max-w-screen-sm flex-col items-center justify-center space-y-6 p-4 md:min-h-[80svh]">
        <h2 className="text-6xl font-bold text-theme-contrary sm:text-8xl">
          Team Frontend.
        </h2>

        <ul className="mx-1 space-y-6 text-6xl font-bold text-accent sm:text-6xl">
          <li>UX and UI design with passion</li>
          <li>Love for supportive animations and smooth transitions.</li>
          <li>Coding to bring everything to life.</li>
        </ul>
      </section>

      <Suspense>
        <ControlBar
          sections={sections}
          collapse={false}
          leftControlAction="Avatar"
          rightControlAction="Up"
        />
      </Suspense>
    </>
  );
}
