'use client';

import { useIsInView } from '@/hooks/useIsInView';
import { useRef } from 'react';
import ControlBar from '@/components/navigation/control-bar/control-bar';
import { EnvelopeIcon } from '@heroicons/react/24/outline';
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import Avatar from '@/components/ui/avatar';

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

  return (
    <>
      <section className="hero flex items-center justify-center">
        <h1
          ref={ref}
          className="mx-auto mt-6 flex gap-1"
          aria-label="Dominik Rubröder, UX engineer at mediawave commerce GmbH"
        >
          <Avatar width={44} height={44} as="Image" />

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
