import Link from 'next/link';
import { motion } from 'framer-motion';
import React from 'react';
import DynamicIcon from '@/components/ui/dynamic-icon';
import type {
  ControlBarActiveSection,
  ControlBarMobileMenuVisibility,
  ControlBarSections
} from '@/types';

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
      } md:visible md:relative md:top-4 md:flex md:w-min md:max-w-none md:rounded-full`}
    >
      {sections.map((section) => (
        <Link
          key={section.id}
          href={`#${section.id}`}
          className={`relative select-none rounded-full px-3 py-1.5 outline-sky-400 transition focus-visible:outline-2 ${
            activeSection === section.id ? '' : 'hover:text-theme-contrary'
          }`}
          onClick={(e) => scrollIntoView(e, section.id)}
        >
          {activeSection === section.id && (
            <motion.span
              layoutId="bubble"
              className="absolute inset-0 z-10 bg-gray-4"
              style={{ borderRadius: 9999 }}
              transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
            />
          )}

          <div
            className={`relative z-20 flex w-max cursor-pointer items-center gap-4 ${
              activeSection === section.id
                ? 'text-theme-contrary'
                : 'hover:text-theme-contrary'
            } md:gap-2`}
          >
            <DynamicIcon name={section.icon} className="h-5 w-5" />
            <span
              className={`inline-block h-4 w-[1px] ${
                activeSection === section.id ? 'bg-gray-2' : 'bg-gray-4'
              }`}
            ></span>
            {section.label}
          </div>
        </Link>
      ))}
    </div>
  );
}
