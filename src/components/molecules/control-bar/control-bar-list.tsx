'use client';

import { motion } from 'motion/react';
import React from 'react';
import DynamicHeroIcon from '@/components/atoms/dynamic-hero-icon';
import type {
  ControlBarActiveSection,
  ControlBarMobileMenuVisibility,
  ControlBarSections
} from '@/types';
import { cn } from '@/lib/utils';
import Button from '@/components/atoms/button';
import GithubIcon from '@/components/atoms/svg/github-icon';
import LinkedinIcon from '@/components/atoms/svg/linkedin-icon';
import { useScrollIntoView } from '@/hooks/useScrollIntoView';

export default function ControlBarList({
  sections,
  activeSection,
  setActiveSection,
  mobileMenu
}: {
  sections: ControlBarSections;
  activeSection: ControlBarActiveSection;
  setActiveSection: (index: number) => void;
  mobileMenu: ControlBarMobileMenuVisibility;
}) {
  const { scrollIntoView } = useScrollIntoView();

  return (
    <div
      className={cn(
        'no-scrollbar max-w-(--breakpoint-sm) bg-background absolute bottom-20 z-50 w-[95vw] items-center space-y-4 rounded-2xl border p-3 px-4 transition md:visible md:relative md:top-4 md:flex md:w-max md:max-w-[85svw] md:gap-4 md:space-y-0 md:overflow-x-auto md:rounded-full lg:max-w-none',
        mobileMenu === 'invisible'
          ? 'invisible -translate-y-4'
          : 'visible translate-y-0'
      )}
    >
      {sections.map((section, index) => (
        <button
          key={section.id}
          className={cn(
            'interactive hover:text-foreground group relative block select-none rounded-full px-3 py-1.5 transition md:inline-block',
            section.className.includes('hidden') ? 'pr-4 md:pr-3' : 'pr-4',
            activeSection === index ? '' : 'hover:bg-muted'
          )}
          title={`Scroll to ${section.label} section`}
          aria-label={`Scroll to ${section.label} section`}
          onClick={() => {
            setActiveSection(index);
            scrollIntoView({ id: section.id });
          }}
        >
          {activeSection !== index && (
            <div className="bg-muted invisible absolute inset-0 z-10 scale-50 rounded-full opacity-0 transition group-hover:visible group-hover:scale-100 group-hover:opacity-100" />
          )}

          {(activeSection === index ||
            (section.defaultActive && activeSection === null)) && (
            <motion.span
              layoutId="page-navigation"
              className="bg-primary absolute inset-0 z-10"
              style={{ borderRadius: 9999 }}
              transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
            />
          )}

          <div
            className={cn(
              'relative z-20 flex w-auto cursor-pointer items-center gap-4 md:gap-2',
              (activeSection === index ||
                (section.defaultActive && activeSection === null)) &&
                'text-white'
            )}
          >
            <DynamicHeroIcon name={section.icon} className="size-5 shrink-0" />

            {section.label && section.label !== '' ? (
              <span className={cn(section.className)}>{section.label}</span>
            ) : null}
          </div>
        </button>
      ))}

      <div className="bg-muted sticky bottom-0 z-10 flex justify-end overflow-x-auto border-t p-4 pb-3.5 md:hidden">
        <Button
          variant="secondary"
          href="https://github.com/dominikrubroeder"
          target="_blank"
          title="Go to GitHub profile of Dominik Rubröder"
          aria-label="Go to GitHub profile of Dominik Rubröder"
          asLink
          className="hover:after:bg-muted-hover"
        >
          <GithubIcon />
        </Button>

        <Button
          variant="secondary"
          href="https://www.linkedin.com/in/dominik-rubröder-49a63817b"
          target="_blank"
          title="Go to LinkedIn profile of Dominik Rubröder"
          aria-label="Go to LinkedIn profile of Dominik Rubröder"
          asLink
          className="hover:after:bg-muted-hover"
        >
          <LinkedinIcon />
        </Button>
      </div>
    </div>
  );
}
