import Link from 'next/link';
import { motion } from 'framer-motion';
import React from 'react';
import DynamicIcon from '@/components/ui/dynamic-icon';
import type {
  ControlBarActiveSection,
  ControlBarMobileMenuVisibility,
  ControlBarSections
} from '@/types';
import { EnvelopeIcon } from '@heroicons/react/24/outline';
import GitHubLink from '@/components/ui/links/github-link';
import LinkedinLink from '@/components/ui/links/linkedin-link';

export default function ControlBarList({
  sections,
  activeSection,
  mobileMenu,
  scrollIntoView
}: {
  sections: ControlBarSections;
  activeSection: ControlBarActiveSection;
  mobileMenu: ControlBarMobileMenuVisibility;
  scrollIntoView: (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    targetId: string
  ) => void;
}) {
  return (
    <div
      className={`no-scrollbar absolute bottom-20 z-50 grid max-h-[70svh] w-[95vw] max-w-screen-sm items-center gap-4 overflow-hidden overflow-y-auto rounded-2xl bg-gray-5 px-4 pt-3 transition ${
        mobileMenu === 'invisible'
          ? 'invisible -translate-y-4'
          : 'visible translate-y-0'
      } md:visible md:relative md:top-4 md:flex md:w-min md:max-w-none md:rounded-full md:p-2`}
    >
      {sections.map((section) => (
        <Link
          key={section.id}
          href={`#${section.id}`}
          className={`relative z-0 select-none rounded-full px-2.5 py-2 outline-sky-400 transition focus-visible:outline-2 ${
            activeSection === section.id ? '' : 'hover:text-theme-contrary'
          }`}
          onClick={(e) => scrollIntoView(e, section.id)}
        >
          {activeSection === section.id && (
            <motion.span
              layoutId="bubble"
              className="absolute inset-0 z-10 bg-gray-4 md:bg-accent/20"
              style={{ borderRadius: 9999 }}
              transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
            />
          )}

          <div
            className={`relative z-20 flex w-max cursor-pointer items-center gap-4 md:pr-2 ${
              activeSection === section.id
                ? 'text-theme-contrary'
                : 'hover:text-theme-contrary'
            } md:gap-2`}
          >
            <div className="flex size-12 items-center justify-center rounded-full bg-accent/20">
              <DynamicIcon name={section.icon} className="size-6 text-accent" />
            </div>
            {section.label}
          </div>
        </Link>
      ))}

      <div className="sticky bottom-0 z-10 inline-flex gap-4 overflow-x-auto border-t border-gray-4 bg-gray-5 p-4 pb-3.5 md:hidden">
        <div className="no-scrollbar flex-1 overflow-x-auto whitespace-nowrap border-r border-r-gray-4 pr-2 text-left">
          <b className="mr-1.5 inline-block text-theme-contrary">
            Dominik Rubröder
          </b>
          UX Engineer @
          <Link
            href="https://www.mediawave.de"
            title="mediawave commerce GmbH"
            aria-label="Go to external mediawave commerce GmbH website"
            className="ml-1.5 inline-block transition hover:text-white"
            target="_blank"
          >
            mediawave GmbH
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <GitHubLink />
          <LinkedinLink />

          <Link
            href="mailto:dominik.rubroeder@icloud.com?subject=I want to write you about..."
            className="group flex size-8 items-center justify-center rounded-full bg-gray-4 transition hover:bg-gray-3"
            title="Mail to Dominik Rubröder"
            aria-label="Write a mail to Dominik Rubröder"
          >
            <EnvelopeIcon className="size-4 shrink-0 transition group-hover:text-white" />
          </Link>
        </div>
      </div>
    </div>
  );
}
