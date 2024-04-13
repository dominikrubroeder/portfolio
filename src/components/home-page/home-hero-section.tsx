'use client';

import { useIsInView } from '@/hooks/useIsInView';
import { useRef } from 'react';
import ControlBar from '@/components/layout/navigation/control-bar/control-bar';
import { EnvelopeIcon } from '@heroicons/react/24/outline';
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { useScrollIntoView } from '@/hooks/useScrollIntoView';

const sections = [
  { id: 'introduction', label: 'Introduction', icon: 'ArrowRightCircleIcon' },
  { id: 'projects', label: 'Projects', icon: 'DocumentDuplicateIcon' },
  { id: 'tools', label: 'Tools', icon: 'PaintBrushIcon' },
  { id: 'technologies', label: 'Technologies', icon: 'Cog6ToothIcon' },
  { id: 'socials', label: 'Socials', icon: 'CheckBadgeIcon' }
];

export default function HomeHeroSection() {
  const ref = useRef(null);
  const isInView = useIsInView(ref);
  const { scrollIntoView } = useScrollIntoView();

  return (
    <>
      <section className="hero flex flex-col justify-center overflow-hidden md:flex-row md:items-center">
        <div className="max-w-max pb-8 pt-4">
          <div className="px-4">
            <h2 className="text-7xl font-bold text-theme-contrary sm:text-8xl">
              Team Frontend.
            </h2>

            <p className="max-w-screen-sm">
              <span className="mx-1 text-6xl font-bold text-violet-400 sm:text-6xl">
                UX and UI with passion
                <br /> Love for supportive animations and smooth transitions.
              </span>
            </p>

            <hr className="my-4" />

            <p>
              Designed with code in mind – Coded, by design
              <button
                className="ml-1.5 inline-block text-accent"
                onClick={() =>
                  scrollIntoView('introduction', { block: 'start' })
                }
              >
                More
              </button>
            </p>
          </div>
        </div>

        <h1
          ref={ref}
          className="mx-auto mt-6 flex gap-1 md:absolute md:bottom-24 md:mt-0"
          aria-label="Dominik Rubröder, UX engineer at mediawave commerce GmbH"
        >
          <div className="group relative cursor-pointer pt-12 transition hover:text-theme-contrary">
            <Link
              href="mailto:dominik.rubroeder@icloud.com?subject=I want to write you about..."
              className="absolute bottom-0 left-1/2 flex size-12 -translate-x-1/2 -translate-y-10 items-center justify-center rounded-full bg-gray-5 transition group-hover:bg-gray-4"
              title="Write email to dominik.rubroeder@icloud.com"
              aria-label="Write email to dominik.rubroeder@icloud.com"
            >
              <EnvelopeIcon className="size-5 text-theme-contrary" />
            </Link>
            Dominik Rubröder
          </div>
          <span className="pt-12">UX Engineer</span>
          <span className="pt-12">@</span>
          <Link
            href="https://www.mediawave.de/"
            className="group relative block cursor-pointer pt-12 transition hover:text-theme-contrary"
            title="Go to external mediawave commerce GmbH website"
            aria-label="Go to external mediawave commerce GmbH website"
            target="_blank"
          >
            <div className="absolute bottom-0 left-1/2 flex size-12 -translate-x-1/2 -translate-y-10 items-center justify-center rounded-full bg-gray-5 transition group-hover:bg-gray-4">
              <ArrowRightIcon className="size-5 -rotate-45 text-theme-contrary" />
            </div>
            mediawave
          </Link>
        </h1>
      </section>

      <ControlBar
        sections={sections}
        collapse={isInView}
        leftControlAction="Avatar"
        rightControlAction="Up"
      />
    </>
  );
}
