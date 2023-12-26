'use client';

import Image from 'next/image';
import { ArrowLeftIcon, ArrowUpIcon } from '@heroicons/react/20/solid';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ControlBar({
  sections
}: {
  sections: { id: string; label: string }[];
}) {
  const [state, setState] = useState<'collapsed' | 'expanded'>('collapsed');
  const [activeTab, setActiveTab] = useState<string | null>(null);

  return (
    <nav className="sticky flex items-center justify-center gap-3 top-4 text-center z-50 mx-auto w-max">
      <div
        className={`absolute left-0 top-0 transition ${
          state === 'collapsed'
            ? 'translate-x-0 scale-95'
            : '-translate-x-16 scale-100'
        }`}
      >
        <ControlBarAction type="Avatar" />
      </div>
      <div className="flex gap-4 rounded-full bg-gray-5 p-3 px-4 items-center w-min z-50 relative">
        {sections.map((section) => (
          <Link
            key={section.id}
            href={`#${section.id}`}
            onClick={() => {
              setActiveTab(section.id);
              setState('expanded');
            }}
            className={`${
              activeTab === section.id ? '' : 'hover:text-white/60'
            } relative rounded-full px-3 py-1.5 select-none cursor-pointer outline-sky-400 transition focus-visible:outline-2`}
          >
            {activeTab === section.id && (
              <motion.span
                layoutId="bubble"
                className="absolute inset-0 z-10 bg-gray-4"
                style={{ borderRadius: 9999 }}
                transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
              />
            )}
            <div
              className={`relative z-20 ${
                activeTab === section.id ? 'text-white' : 'hover:text-white'
              }`}
            >
              {section.label}
            </div>
          </Link>
        ))}
      </div>
      <div
        className={`absolute right-0 top-0 transition ${
          state === 'collapsed'
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
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  if (type === 'Up')
    return (
      <div
        onClick={() => scrollToTop()}
        className="flex items-center gap-4 justify-center bg-gray-5 rounded-full w-14 h-14"
      >
        <ArrowUpIcon className="h-4 w-4 text-white" />
      </div>
    );

  if (type === 'Back')
    return (
      <div className="flex items-center gap-4 justify-center bg-gray-5 rounded-full w-14 h-14">
        <ArrowLeftIcon className="h-4 w-4 text-white" />
      </div>
    );

  return (
    <div className="flex items-center gap-4">
      <Image
        src="/avatar.jpg"
        alt="Dominik Rubröder Avatar"
        width="56"
        height="56"
        className="shrink-0 rounded-full border-2 border-gray-5"
      />
    </div>
  );
}
