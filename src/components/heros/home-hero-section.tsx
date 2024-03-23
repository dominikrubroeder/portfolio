'use client';

import { useIsInView } from '@/hooks/useIsInView';
import { useRef } from 'react';
import ControlBar from '@/components/navigation/control-bar/control-bar';
import { EnvelopeIcon } from '@heroicons/react/24/outline';
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { useUpdateSearchParams } from '@/hooks/useUpdateSearchParams';
import DesignModeToggle from '@/components/toggle/design-mode-toggle';
import DevModeToggle from '@/components/toggle/dev-mode-toggle';
import SkillBadges from '@/components/skill-badge/skill-badges';
import UxEffectsButton from '@/components/button/ux-effects-button';

const sections = [
  { id: 'projects', label: 'Projects', icon: 'DocumentDuplicateIcon' },
  { id: 'tools', label: 'Tools', icon: 'PaintBrushIcon' },
  { id: 'technologies', label: 'Technologies', icon: 'Cog6ToothIcon' },
  { id: 'socials', label: 'Socials', icon: 'CheckBadgeIcon' }
];

export default function HomeHeroSection() {
  const ref = useRef(null);
  const isInView = useIsInView(ref);

  const { searchParams } = useUpdateSearchParams();

  const uxEffects = !!(
    searchParams.get('uxEffects') && searchParams.get('uxEffects') === 'true'
  );

  return (
    <>
      <section className="realtive hero flex items-center justify-center overflow-hidden">
        <div className="max-w-max">
          <h2 className="mx-auto text-center text-5xl font-bold text-theme-contrary sm:text-7xl md:text-8xl">
            Team Frontend.
          </h2>

          <p className="max-w-screen-sm">
            <span className="mx-1 text-6xl font-bold text-violet-400">
              UX and UI with passion
              <br /> Love for supportive animations and smooth transitions.
            </span>
          </p>

          <hr className="my-4" />

          <p className="flex gap-1.5">
            Designed with code in mind – Coded, by design
            <button className="text-accent">More</button>
          </p>

          {uxEffects && <DesignModeToggle />}

          {uxEffects && <DevModeToggle />}

          {uxEffects && (
            <div className="no-scrollbar mx-auto max-w-screen-sm border-r border-r-gray-5 py-2">
              <SkillBadges />
            </div>
          )}
        </div>

        <h1
          ref={ref}
          className="absolute bottom-24 mx-auto flex gap-1"
          aria-label="Dominik Rubröder, UX engineer at mediawave commerce GmbH"
        >
          <div className="group relative cursor-pointer pt-12 transition hover:text-theme-contrary">
            <Link
              href="mailto:dominik.rubroeder@icloud.com?subject=I want to write you about..."
              className="absolute bottom-0 left-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-10 items-center justify-center rounded-full bg-gray-5 transition hover:bg-gray-4 group-hover:visible group-hover:-translate-y-10 md:invisible md:-translate-y-4"
              title="Write email to dominik.rubroeder@icloud.com"
              aria-label="Write email to dominik.rubroeder@icloud.com"
            >
              <EnvelopeIcon className="h-5 w-5 text-theme-contrary" />
            </Link>
            Dominik Rubröder
          </div>

          <UxEffectsButton />

          <span className="pt-12">@</span>

          <Link
            href="https://www.mediawave.de/"
            className="group relative block cursor-pointer pt-12 transition hover:text-theme-contrary"
            title="Go to external mediawave commerce GmbH website"
            aria-label="Go to external mediawave commerce GmbH website"
            target="_blank"
          >
            <div className="absolute bottom-0 left-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-10 items-center justify-center rounded-full bg-gray-5 transition hover:bg-gray-4 group-hover:visible group-hover:-translate-y-10 md:invisible md:-translate-y-4">
              <ArrowRightIcon className="h-5 w-5 -rotate-45 text-theme-contrary" />
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
