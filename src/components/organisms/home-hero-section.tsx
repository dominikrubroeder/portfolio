import React, { Suspense } from 'react';
import ControlBar from '@/components/molecules/control-bar/control-bar';
import { ControlBarSections } from '@/types';
import Button from '@/components/atoms/button';

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
        className="pb-12 pt-6 sm:mx-auto sm:flex sm:flex-col sm:items-center sm:justify-center sm:gap-8 md:min-h-[80svh]"
      >
        <div className="max-w-screen-md space-y-3 px-4">
          <p className="text-primary">Build your vision</p>
          <h2 className="text-6xl font-bold text-foreground sm:text-8xl">
            For the Frontend
          </h2>
          <p className="mx-1 text-4xl font-bold leading-[4rem] text-primary sm:text-6xl">
            Building applications by
            <code className="relative ml-2 inline-block">
              code
              <small className="absolute -top-3 right-9 rounded border bg-muted text-xs">
                .ts
              </small>
              <small className="absolute -top-3 right-0 rounded border bg-muted text-xs">
                .tsx
              </small>
            </code>
            ,
            <span className="relative mx-2 -mt-4 inline-block rounded border">
              <span className="absolute -left-1 -top-1 size-2 rounded-full bg-primary" />
              <span className="absolute -right-1 -top-1 size-2 rounded-full bg-primary" />
              <span className="absolute -bottom-1 -left-1 size-2 rounded-full bg-primary" />
              <span className="absolute -bottom-1 -right-1 size-2 rounded-full bg-primary" />
              design
            </span>
            and <span className="text-4xl">🧐</span> psychological principles
          </p>
        </div>

        <Button variant="outline" className="hidden sm:block">
          Get to know me
        </Button>
      </section>

      <Suspense>
        <ControlBar sections={sections} collapse={false} />
      </Suspense>
    </>
  );
}
