'use client';

import { useIsInView } from '@/hooks/useIsInView';
import { useRef, useState } from 'react';
import ControlBar from '@/components/navigation/ControlBar';
import { EnvelopeIcon } from '@heroicons/react/24/outline';
import SkillBadge from '@/components/SkillBadge';
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

const sections = [
  { id: 'projects', label: 'Projects' },
  { id: 'tools', label: 'Tools' },
  { id: 'technologies', label: 'Technologies' },
  { id: 'socials', label: 'Socials' }
];

const skillBadges = [
  {
    id: 'interfacedesign',
    title: 'Interfacedesign',
    position: 'left-4 top-12'
    // scrollTo: 'tools'
  },
  {
    id: 'concept',
    title: 'Concept',
    position: 'left-4 top-48 md:top-32 md:left-1/2 md:-translate-x-1/2'
  },
  {
    id: 'prototyping',
    title: 'Prototyping',
    position: 'bottom-[22rem] right-4 lg:bottom-16'
  },
  {
    id: 'microanimations',
    title: 'Microanimations',
    position: 'right-4 top-32'
  },
  {
    id: 'transitions',
    title: 'Transitions',
    position: 'right-4 bottom-52 lg:right-auto lg:left-16 lg:bottom-24'
  },
  {
    id: 'supportive-animations',
    title: 'Supportive Animations',
    position: 'bottom-64 left-4 lg:left-32 lg:bottom-72'
  }
];

export default function HomeHeroSection() {
  const ref = useRef(null);
  const isInView = useIsInView(ref);
  const [uxEffects, setUxEffects] = useState(false);

  console.log(isInView);

  return (
    <>
      <section className="realtive flex h-[calc(100dvh-5rem)] items-center justify-center">
        <div className="max-w-max">
          <h1 className="mx-auto text-center text-5xl font-bold text-white md:text-8xl">
            Team frontend.
          </h1>

          {uxEffects &&
            skillBadges.map((skillBadge) => (
              <SkillBadge
                key={skillBadge.id}
                text={skillBadge.title}
                position={skillBadge.position}
              />
            ))}
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
          <button
            aria-label="UX Engineer at mediawave"
            className="pt-12 text-violet-400"
            onClick={() => setUxEffects((prevState) => !prevState)}
          >
            UX Engineer
          </button>
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

      <ControlBar sections={sections} collapse={isInView} />
    </>
  );
}
