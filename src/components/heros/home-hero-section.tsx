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
      <section className="realtive flex h-[calc(100dvh-5rem)] items-center justify-center">
        <div className="max-w-max">
          <h1 className="mx-auto text-center text-5xl font-bold text-theme-contrary sm:text-7xl md:text-8xl">
            Team Frontend.
          </h1>

          {uxEffects && <DesignModeToggle />}

          {uxEffects && <DevModeToggle />}

          {uxEffects && <SkillBadges />}
        </div>

        <h2 ref={ref} className="absolute bottom-24 mx-auto flex gap-1">
          <div className="relative">
            <h2 className="group cursor-pointer pt-12 transition hover:text-theme-contrary">
              <a
                className="absolute bottom-0 left-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-10 items-center justify-center rounded-full bg-gray-5 transition hover:bg-gray-4 group-hover:visible group-hover:-translate-y-10 md:invisible md:-translate-y-4"
                aria-label="Write email to dominik.rubroeder@icloud.com"
                href="mailto:dominik.rubroeder@icloud.com?subject=Hey buddy!"
              >
                <EnvelopeIcon className="h-5 w-5 text-theme-contrary" />
              </a>
              Dominik Rubröder
            </h2>
          </div>

          <UxEffectsButton />

          <span className="pt-12">@</span>

          <div className="relative">
            <Link
              href="https://www.mediawave.de/"
              target="_blank"
              className="group block cursor-pointer pt-12 transition hover:text-theme-contrary"
              aria-label="Go to external mediawave commerce GmbH website"
            >
              <div className="absolute bottom-0 left-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-10 items-center justify-center rounded-full bg-gray-5 transition hover:bg-gray-4 group-hover:visible group-hover:-translate-y-10 md:invisible md:-translate-y-4">
                <ArrowRightIcon className="h-5 w-5 -rotate-45 text-theme-contrary" />
              </div>
              mediawave
            </Link>
          </div>
        </h2>
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
