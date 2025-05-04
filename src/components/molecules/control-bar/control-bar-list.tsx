import { motion } from 'motion/react';
import React from 'react';
import type {
  ControlBarActiveSection,
  ControlBarSections
} from '@/components/molecules/control-bar/types/types';
import { cn } from '@/lib/utils';
import { ScrollToElementButton } from '@/components/atoms/button';
import {
  ChevronRightIcon,
  EllipsisHorizontalIcon
} from '@heroicons/react/20/solid';

export function ControlBarNavigation({
  sections,
  activeSection,
  setActiveSection,
  isUnfolded,
  toggleIsUnfolded
}: {
  sections: ControlBarSections;
  activeSection: ControlBarActiveSection;
  setActiveSection: (index: number) => void;
  isUnfolded: boolean;
  toggleIsUnfolded: () => void;
}) {
  return (
    <motion.ul
      animate={{ width: isUnfolded ? '100%' : '64px' }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="flex origin-center items-center gap-2 rounded-full bg-muted px-2.5 py-2"
    >
      <li className="-mr-2">
        <button
          onClick={toggleIsUnfolded}
          className="group flex size-11 cursor-pointer items-center justify-center rounded-full border bg-muted transition hover:bg-muted-hover"
        >
          {isUnfolded ? (
            <ChevronRightIcon className="size-5 transition group-hover:text-foreground" />
          ) : (
            <EllipsisHorizontalIcon className="size-5 transition group-hover:text-foreground" />
          )}
        </button>
      </li>

      {isUnfolded &&
        sections.map((section, index) => (
          <li key={section.id}>
            <ScrollToElementButton
              id={section.id}
              variant="naked"
              className={cn(
                'group relative block interactive rounded-full transition select-none hover:text-foreground md:inline-block',
                activeSection === index ? '' : 'hover:bg-muted'
              )}
              title={`Scroll to ${section.label} section`}
              aria-label={`Scroll to ${section.label} section`}
              onClick={() => {
                setActiveSection(index);
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
            </ScrollToElementButton>
          </li>
        ))}
    </motion.ul>
  );
}
