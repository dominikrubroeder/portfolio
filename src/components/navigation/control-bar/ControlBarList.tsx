import Link from 'next/link';
import { motion } from 'framer-motion';
import React, { useCallback } from 'react';

export default function ControlBarList({
  sections,
  activeTab,
  mobileMenu,
  setState
}: {
  sections: { id: string; label: string }[];
  activeTab: string | null;
  mobileMenu: 'visible' | 'invisible';
  setState: React.Dispatch<
    React.SetStateAction<{
      controlBar: 'collapsed' | 'expanded';
      activeTab: string | null;
      mobileMenu: 'visible' | 'invisible';
    }>
  >;
}) {
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
    [setState]
  );

  return (
    <div
      className={`absolute bottom-20 z-50 grid w-[90dvw] max-w-screen-sm items-center gap-4 rounded-2xl bg-gray-5 p-3 px-4 transition ${
        mobileMenu === 'invisible'
          ? 'invisible -translate-y-4'
          : 'visible translate-y-0'
      } md:visible md:relative md:top-4 md:flex md:w-min md:max-w-none md:rounded-full`}
    >
      {sections.map((section) => (
        <Link
          key={section.id}
          href={`#${section.id}`}
          className={`${
            activeTab === section.id ? '' : 'hover:text-theme-contrary'
          } relative cursor-pointer select-none rounded-full px-3 py-1.5 outline-sky-400 transition focus-visible:outline-2`}
          onClick={(e) => handleScroll(e, section.id)}
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
            className={`relative z-20 w-max ${
              activeTab === section.id
                ? 'text-theme-contrary'
                : 'hover:text-theme-contrary'
            }`}
          >
            {section.label}
          </div>
        </Link>
      ))}
    </div>
  );
}
