import Link from 'next/link';
import { motion } from 'framer-motion';
import React from 'react';
import DynamicHeroIcon from '@/components/ui/dynamic-hero-icon';
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
      className={`absolute bottom-20 z-50 grid w-[95vw] max-w-screen-sm items-center gap-4 rounded-2xl bg-gray-5 p-3 px-4 transition ${
        mobileMenu === 'invisible'
          ? 'invisible -translate-y-4'
          : 'visible translate-y-0'
      } no-scrollbar md:visible md:relative md:top-4 md:flex md:w-max md:max-w-[80svw] md:overflow-x-auto md:rounded-full lg:max-w-none`}
    >
      {sections.map((section) => (
        <Link
          key={section.id}
          href={`#${section.id}`}
          className={`interactive relative select-none rounded-full px-3 py-1.5 outline-sky-400 transition focus-visible:outline-2 ${
            activeSection === section.id ? '' : 'hover:text-foreground'
          }`}
          onClick={(e) => scrollIntoView(e, section.id)}
        >
          {activeSection === section.id && (
            <motion.span
              layoutId="page-navigation"
              className="absolute inset-0 z-10 bg-gray-4"
              style={{ borderRadius: 9999 }}
              transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
            />
          )}

          <div
            className={`relative z-20 flex w-max cursor-pointer items-center gap-4 ${
              activeSection === section.id
                ? 'text-foreground'
                : 'hover:text-foreground'
            } md:gap-2`}
          >
            <DynamicHeroIcon name={section.icon} className="size-5" />
            {section.label}
          </div>
        </Link>
      ))}

      <div className="sticky bottom-0 z-10 inline-flex gap-4 overflow-x-auto border-t border-gray-4 bg-gray-5 p-4 pb-3.5 md:hidden">
        <div className="no-scrollbar mt-2 flex-1 overflow-x-auto whitespace-nowrap border-r border-r-gray-4 pr-2 text-left">
          <b className="mr-1.5 inline-block text-foreground">
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
            className="group flex size-10 items-center justify-center rounded-full bg-gray-4 transition hover:bg-gray-3"
            title="Mail to Dominik Rubröder"
            aria-label="Write a mail to Dominik Rubröder"
          >
            <EnvelopeIcon className="size-5 shrink-0 transition group-hover:text-white" />
          </Link>
        </div>
      </div>
    </div>
  );
}
