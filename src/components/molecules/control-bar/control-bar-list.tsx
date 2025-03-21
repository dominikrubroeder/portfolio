'use client';

import { motion } from 'motion/react';
import React from 'react';
import type {
  ControlBarActiveSection,
  ControlBarMobileMenuVisibility,
  ControlBarSections
} from '@/components/molecules/control-bar/types';
import { cn } from '@/lib/utils';
import { Button } from '@/components/atoms/button';
import { useScrollIntoView } from '@/hooks/useScrollIntoView';
import { GithubLogo, LinkedinLogo } from '@/components/atoms/logo';

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
        'no-scrollbar absolute bottom-20 z-50 w-[95vw] max-w-(--breakpoint-sm) items-center space-y-4 rounded-2xl border bg-muted p-3 px-4 transition md:visible md:relative md:top-4 md:flex md:w-max md:max-w-[85svw] md:gap-2 md:space-y-0 md:overflow-x-auto md:rounded-full lg:max-w-none',
        mobileMenu === 'invisible'
          ? 'invisible -translate-y-4'
          : 'visible translate-y-0'
      )}
    >
      {sections.map((section, index) => (
        <button
          key={section.id}
          className={cn(
            'group relative block interactive rounded-full transition select-none hover:text-foreground md:inline-block',
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
            <div className="invisible absolute inset-0 z-10 scale-50 rounded-full bg-muted opacity-0 transition group-hover:visible group-hover:scale-100 group-hover:opacity-100" />
          )}

          {(activeSection === index ||
            (section.defaultActive && activeSection === null)) && (
            <motion.span
              layoutId="page-navigation"
              className="absolute inset-0 z-10 bg-primary"
              style={{ borderRadius: 9999 }}
              transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
            />
          )}

          <div
            className={cn(
              'relative z-20 flex w-auto cursor-pointer items-center gap-4 rounded-full px-3 py-2 hover:bg-black/6 md:gap-2',
              (activeSection === index ||
                (section.defaultActive && activeSection === null)) &&
                'text-white hover:bg-transparent'
            )}
          >
            {section.icon}

            {section.label && section.label !== '' ? (
              <span className={cn(section.className)}>{section.label}</span>
            ) : null}
          </div>
        </button>
      ))}

      <div className="sticky bottom-0 z-10 flex justify-end overflow-x-auto border-t bg-muted p-4 pb-3.5 md:hidden">
        <Button
          variant="secondary"
          href="https://github.com/dominikrubroeder"
          target="_blank"
          title="Go to GitHub profile of Dominik Rubröder"
          aria-label="Go to GitHub profile of Dominik Rubröder"
          className="hover:after:bg-muted-hover"
        >
          <GithubLogo />
        </Button>

        <Button
          variant="secondary"
          href="https://www.linkedin.com/in/dominik-rubröder-49a63817b"
          target="_blank"
          title="Go to LinkedIn profile of Dominik Rubröder"
          aria-label="Go to LinkedIn profile of Dominik Rubröder"
          className="hover:after:bg-muted-hover"
        >
          <LinkedinLogo />
        </Button>
      </div>
    </div>
  );
}
