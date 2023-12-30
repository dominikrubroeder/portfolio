'use client';

import Image from 'next/image';
import { ArrowLeftIcon, ArrowUpIcon } from '@heroicons/react/20/solid';
import React, { useCallback, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Bars3Icon } from '@heroicons/react/24/outline';

export default function ControlBar({
  sections,
  collapse
}: {
  sections: { id: string; label: string }[];
  collapse: boolean;
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
    <nav className="sticky top-4 z-50 mx-auto flex w-max items-center justify-center gap-3 text-center">
      <div
        className={`absolute left-0 top-0 transition ${
          state.controlBar === 'collapsed'
            ? 'translate-x-0 scale-95'
            : '-translate-x-16 scale-100'
        }`}
      >
        <ControlBarAction type="Avatar" />
      </div>

      <div
        className={`absolute top-[4.5rem] z-50 grid w-min items-center gap-4 rounded-2xl bg-gray-5 p-3 px-4 transition ${
          state.mobileMenu === 'invisible'
            ? 'invisible -translate-y-4'
            : 'visible translate-y-0'
        } sm:visible sm:relative sm:top-4 sm:flex sm:rounded-full`}
      >
        {sections.map((section) => (
          <Link
            key={section.id}
            href={`#${section.id}`}
            className={`${
              state.activeTab === section.id ? '' : 'hover:text-white/60'
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
                  ? 'text-white'
                  : 'hover:text-white'
              }`}
            >
              {section.label}
            </div>
          </Link>
        ))}
      </div>

      <button
        aria-label="Open mobile menu"
        className="z-50 flex h-14 w-14 cursor-pointer items-center justify-center gap-4 rounded-full bg-gray-5 transition hover:bg-gray-4 sm:hidden"
        onClick={() =>
          setState((prevState) => {
            return {
              ...prevState,
              controlBar: 'expanded',
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

      <div
        className={`absolute right-0 top-0 transition ${
          state.controlBar === 'collapsed'
            ? 'translate-x-0 scale-95'
            : 'translate-x-16 scale-100'
        }`}
      >
        <ControlBarAction type="Up" />
      </div>
    </nav>
  );
}

function ControlBarAction({ type }: { type: 'Avatar' | 'Up' | 'Back' }) {
  function scrollToTop() {
    document.body.scrollIntoView({ behavior: 'smooth' });
  }

  if (type === 'Up')
    return (
      <div
        onClick={() => scrollToTop()}
        className="group flex h-14 w-14 cursor-pointer items-center justify-center gap-4 rounded-full bg-gray-5 transition hover:bg-gray-4"
      >
        <ArrowUpIcon className="h-4 w-4 transition group-hover:text-white" />
      </div>
    );

  if (type === 'Back')
    return (
      <div className="flex h-14 w-14 items-center justify-center gap-4 rounded-full bg-gray-5">
        <ArrowLeftIcon className="h-4 w-4 text-white" />
      </div>
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
