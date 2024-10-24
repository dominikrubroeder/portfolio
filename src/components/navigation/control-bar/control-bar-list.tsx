import { motion } from 'framer-motion';
import React from 'react';
import DynamicHeroIcon from '@/components/ui/dynamic-hero-icon';
import type {
  ControlBarActiveSection,
  ControlBarMobileMenuVisibility,
  ControlBarSections
} from '@/types';
import { cn } from '@/lib/utils';
import Button from '@/components/atoms/button';
import GithubIcon from '@/components/ui/svg/github-icon';
import LinkedinIcon from '@/components/ui/svg/linkedin-icon';

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
    e: React.MouseEvent<HTMLButtonElement>,
    targetId: string
  ) => void;
}) {
  return (
    <div
      className={cn(
        'no-scrollbar absolute bottom-20 z-50 w-[95vw] max-w-screen-sm items-center space-y-4 rounded-2xl bg-muted p-3 px-4 transition md:visible md:relative md:top-4 md:flex md:w-max md:max-w-[85svw] md:gap-4 md:space-y-0 md:overflow-x-auto md:rounded-full lg:max-w-none',
        mobileMenu === 'invisible'
          ? 'invisible -translate-y-4'
          : 'visible translate-y-0'
      )}
    >
      {sections.map((section) => (
        <button
          key={section.id}
          className={cn(
            'interactive group relative block select-none rounded-full px-3 py-1.5 transition hover:text-foreground md:inline-block',
            section.className.includes('hidden') ? 'pr-4 md:pr-3' : 'pr-4',
            activeSection === section.id ? '' : 'hover:bg-muted-hover'
          )}
          title={`Scroll to ${section.label} section`}
          aria-label={`Scroll to ${section.label} section`}
          onClick={(e) => scrollIntoView(e, section.id)}
        >
          {activeSection !== section.id && (
            <div className="invisible absolute inset-0 z-10 scale-50 rounded-full bg-muted-hover opacity-0 transition group-hover:visible group-hover:scale-100 group-hover:opacity-100" />
          )}

          {(activeSection === section.id ||
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
              'relative z-20 flex w-auto cursor-pointer items-center gap-4 md:gap-2',
              (activeSection === section.id ||
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

      <div className="sticky bottom-0 z-10 flex justify-end overflow-x-auto border-t bg-muted p-4 pb-3.5 md:hidden">
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
