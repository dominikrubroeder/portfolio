'use client';

import Image from 'next/image';
import { ArrowLeftIcon, ArrowUpIcon } from '@heroicons/react/20/solid';
import React, { useCallback, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Bars3Icon } from '@heroicons/react/24/outline';
import { capitalize } from '@/lib/helpers';
import { useRouter } from 'next/navigation';
import type { ControlBarAction } from '@/lib/types';

export default function ControlBar({
  sections,
  collapse,
  leftControlAction = 'Avatar',
  rightControlAction = 'Up'
}: {
  sections: { id: string; label: string }[];
  collapse: boolean;
  leftControlAction: ControlBarAction;
  rightControlAction: ControlBarAction;
}) {
  const [state, setState] = useState<{
    controlBar: 'collapsed' | 'expanded';
    activeTab: string | null;
    mobileMenu: 'visible' | 'invisible';
  }>({ controlBar: 'collapsed', activeTab: null, mobileMenu: 'invisible' });

  useEffect(
    () =>
      setState((prevState) => {
        return {
          activeTab: collapse ? null : prevState.activeTab,
          controlBar: collapse ? 'collapsed' : 'expanded',
          mobileMenu: 'invisible'
        };
      }),
    [collapse]
  );

  const handleScroll = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
      // first prevent the default behavior
      e.preventDefault();

      // get the element by id and use scrollIntoView
      const element = document.getElementById(targetId);

      element?.scrollIntoView({
        behavior: 'smooth'
      });

      setState(() => {
        return {
          controlBar: 'expanded',
          activeTab: targetId,
          mobileMenu: 'invisible'
        };
      });
    },
    []
  );

  return (
    <nav className="fixed bottom-4 z-50 mx-auto flex w-full items-center justify-center gap-3 text-center md:sticky md:top-4 md:w-max">
      <div
        className={`absolute left-1/2 top-0 transition ${
          state.controlBar === 'collapsed'
            ? '-translate-x-1/2 scale-95'
            : '-translate-x-24 scale-100'
        }`}
      >
        <ControlBarAction type={leftControlAction} />
      </div>

      <div
        className={`absolute bottom-20 z-50 grid w-[90dvw] items-center gap-4 rounded-2xl bg-gray-5 p-3 px-4 transition ${
          state.mobileMenu === 'invisible'
            ? 'invisible -translate-y-4'
            : 'visible translate-y-0'
        } md:visible md:relative md:top-4 md:flex md:w-min md:rounded-full`}
      >
        {sections.map((section) => (
          <Link
            key={section.id}
            href={`#${section.id}`}
            className={`${
              state.activeTab === section.id ? '' : 'hover:text-theme-contrary'
            } relative cursor-pointer select-none rounded-full px-3 py-1.5 outline-sky-400 transition focus-visible:outline-2`}
            onClick={(e) => handleScroll(e, section.id)}
          >
            {state.activeTab === section.id && (
              <motion.span
                layoutId="bubble"
                className="absolute inset-0 z-10 bg-gray-4"
                style={{ borderRadius: 9999 }}
                transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
              />
            )}
            <div
              className={`relative z-20 w-max ${
                state.activeTab === section.id
                  ? 'text-theme-contrary'
                  : 'hover:text-theme-contrary'
              }`}
            >
              {section.label}
            </div>
          </Link>
        ))}
      </div>

      <div
        className={`flex items-center gap-2 rounded-full bg-gray-5 transition ${
          state.activeTab ? 'pl-4' : 'pl-0'
        } md:hidden`}
      >
        {state.activeTab && <h3>{capitalize(state.activeTab ?? '')}</h3>}
        <button
          aria-label="Open mobile menu"
          className="z-50 flex h-14 w-14 cursor-pointer items-center justify-center gap-4 rounded-full bg-gray-5 transition hover:bg-gray-4"
          onClick={() =>
            setState((prevState) => {
              return {
                ...prevState,
                controlBar: prevState.controlBar,
                mobileMenu:
                  prevState.mobileMenu === 'invisible' ? 'visible' : 'invisible'
              };
            })
          }
        >
          <div className="rounded-full bg-gray-4 p-2">
            <Bars3Icon className="h-5 w-5 text-theme-contrary transition" />
          </div>
        </button>
      </div>

      <div
        className={`absolute right-1/2 top-0 transition ${
          state.controlBar === 'collapsed'
            ? 'translate-x-1/2 scale-95'
            : 'translate-x-24 scale-100'
        }`}
      >
        <ControlBarAction type={rightControlAction} />
      </div>
    </nav>
  );
}

function ControlBarAction({ type }: { type: ControlBarAction }) {
  const router = useRouter();

  function scrollToTop() {
    document.body.scrollIntoView({ behavior: 'smooth' });
  }

  if (type === 'Up')
    return (
      <button
        aria-label="Scroll to top"
        onClick={() => scrollToTop()}
        className="group flex h-14 w-14 cursor-pointer items-center justify-center gap-4 rounded-full border-2 border-gray-5 bg-gray-5 transition hover:border-gray-4 hover:bg-gray-4"
      >
        <ArrowUpIcon className="h-4 w-4 transition group-hover:text-theme-contrary" />
      </button>
    );

  if (type === 'Back')
    return (
      <button
        aria-label="Navigate back"
        className="group flex h-14 w-14 cursor-pointer items-center justify-center gap-4 rounded-full border-2 border-gray-5 bg-gray-5 transition hover:border-gray-4 hover:bg-gray-4"
        onClick={() => router.back()}
      >
        <ArrowLeftIcon className="h-4 w-4 transition group-hover:text-theme-contrary" />
      </button>
    );

  return (
    <Link href="/" className="flex items-center gap-4">
      <Image
        src="/avatar.jpg"
        alt="Dominik Rubröder Avatar"
        width="56"
        height="56"
        className="shrink-0 rounded-full border-2 border-gray-5"
      />
    </Link>
  );
}
