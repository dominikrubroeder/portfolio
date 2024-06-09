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
      <section className="mx-auto flex w-full max-w-screen-sm items-center justify-center p-4 md:h-[80svh]">
        <div>
          <h2 className="text-6xl font-bold text-theme-contrary sm:text-8xl">
            Team Frontend.
          </h2>

          <p className="max-w-screen-sm">
            <span className="mx-1 text-6xl font-bold text-accent sm:text-6xl">
              UX and UI design with passion
              <br /> Love for supportive animations and smooth transitions.
            </span>
          </p>

          <hr className="my-4" />

          <p>Designed with code in mind – Coded, by design</p>
        </div>
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
