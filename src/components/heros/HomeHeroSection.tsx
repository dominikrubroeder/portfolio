'use client';

import { useIsInView } from '@/hooks/useIsInView';
import { useRef, useState } from 'react';
import ControlBar from '@/components/navigation/control-bar/ControlBar';
import { EnvelopeIcon } from '@heroicons/react/24/outline';
import SkillBadge from '@/components/SkillBadge';
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import Toggle from '@/components/Toggle';

const sections = [
  { id: 'projects', label: 'Projects', icon: 'DocumentDuplicateIcon' },
  { id: 'tools', label: 'Tools', icon: 'PaintBrushIcon' },
  { id: 'technologies', label: 'Technologies', icon: 'Cog6ToothIcon' },
  { id: 'socials', label: 'Socials', icon: 'CheckBadgeIcon' }
];

// To data.json?
// Create Type?
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
    position: 'left-4 top-48 lg:top-32 lg:left-1/2 lg:-translate-x-1/2'
  },
  {
    id: 'prototyping',
    title: 'Prototyping',
    position: 'top-64 right-4 lg:top-auto lg:bottom-32 lg:bottom-16'
  },
  {
    id: 'microinteractions',
    title: 'Microinteractions',
    position: 'right-4 top-32'
  },
  {
    id: 'transitions',
    title: 'Transitions',
    position: 'bottom-[15rem] right-4 lg:right-auto lg:left-16 lg:bottom-24'
  },
  {
    id: 'supportive-animations',
    title: 'Supportive Animations',
    position: 'bottom-80 left-4 lg:left-32 lg:bottom-72'
  },
  {
    id: 'frontend-development',
    title: 'Frontend Development',
    position: 'hidden lg:flex lg:right-4 lg:bottom-72'
  },
  {
    id: 'code-architecture',
    title: 'Code Architecture',
    position: 'hidden lg:flex lg:right-4 lg:top-72'
  },
  {
    id: 'design-patterns',
    title: 'Design Patterns',
    position: 'hidden lg:flex lg:right-96 lg: bottom-80'
  },
  {
    id: 'design-system',
    title: 'Design System',
    position: 'hidden lg:flex lg:left-72 lg:top-56'
  }
];

export default function HomeHeroSection() {
  const ref = useRef(null);
  const isInView = useIsInView(ref);
  const [state, setState] = useState({
    uxEffects: false,
    designMode: false,
    devMode: false,
    animate: false
  });

  return (
    <>
      <section className="realtive flex h-[calc(100dvh-5rem)] items-center justify-center">
        <div className="max-w-max">
          <h1 className="mx-auto text-center text-5xl font-bold text-theme-contrary sm:text-7xl md:text-8xl">
            Team Frontend.
          </h1>

          {state.uxEffects && (
            <Toggle
              label="Design mode"
              enabled={state.designMode}
              onClick={() =>
                setState((prevState) => {
                  return { ...prevState, designMode: !prevState.designMode };
                })
              }
              className="absolute right-4 top-4"
            />
          )}

          {state.uxEffects && (
            <Toggle
              label="Dev mode"
              enabled={state.designMode}
              onClick={() =>
                setState((prevState) => {
                  return { ...prevState, devMode: !prevState.devMode };
                })
              }
              className="absolute right-4 top-14"
            />
          )}

          {state.uxEffects && (
            <Toggle
              label="Animate"
              enabled={state.animate}
              onClick={() =>
                setState((prevState) => {
                  return { ...prevState, animate: !prevState.animate };
                })
              }
              className="absolute right-4 top-24"
            />
          )}

          {state.uxEffects &&
            skillBadges.map((skillBadge) => (
              <SkillBadge
                key={skillBadge.id}
                text={skillBadge.title}
                position={skillBadge.position}
                designMode={state.designMode}
                devMode={state.devMode}
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
            onClick={() =>
              setState((prevState) => {
                return { ...prevState, uxEffects: !prevState.uxEffects };
              })
            }
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

      <ControlBar
        sections={sections}
        collapse={isInView}
        leftControlAction="Avatar"
        rightControlAction="Up"
      />
    </>
  );
}
