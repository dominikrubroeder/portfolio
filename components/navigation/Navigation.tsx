import { ChevronDoubleUpIcon } from '@heroicons/react/24/solid';
import { motion, useScroll, useSpring } from 'framer-motion';
import Image from 'next/image';
import React, { useState } from 'react';
import { defaultPageSectionData } from '../../data';

interface NavigationProps {
  data?: { title: string; content: JSX.Element }[];
  heroSectionIsOnScreen: boolean;
  activeSection: number;
  activateSection: (index: number) => void;
}

const Navigation: React.FC<NavigationProps> = ({
  data = defaultPageSectionData,
  heroSectionIsOnScreen,
  activeSection = 0,
  activateSection
}) => {
  const [showSectionList, setShowSectionList] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <header
      className={`z-[100] flex w-full items-center justify-center gap-2 ${
        !heroSectionIsOnScreen
          ? 'fixed bottom-6 md:sticky md:top-4'
          : 'relative'
      } `}
    >
      <div className="relative z-50 transition active:scale-95">
        <button
          className={`interactive absolute top-1/2 z-40 -translate-y-1/2 rounded-full bg-apple-gray-6 p-1.5 duration-300 hover:duration-150 md:p-2 ${
            heroSectionIsOnScreen
              ? 'left-0 scale-50'
              : '-left-[3.25rem] scale-100 md:-left-[4.25rem]'
          }`}
          onClick={() => activateSection(0)}
        >
          <Image
            src="/images/avatar-square.jpg"
            width={28}
            height={28}
            alt="Logo"
            className="rounded-full"
            priority
          />
        </button>

        <div className="relative z-50">
          <span className="absolute top-0 -left-2.5 hidden h-full w-12 rounded-l-full bg-apple-gray-6 md:block"></span>

          {showSectionList && (
            <SectionList
              data={data}
              activeSection={activeSection}
              activateSection={activateSection}
              setShowSectionList={setShowSectionList}
            />
          )}

          <ul
            className="relative grid cursor-pointer items-center overflow-hidden rounded-full bg-apple-gray-6 px-4 md:p-0"
            style={{ gridTemplateColumns: `repeat(${data.length}, 1fr)` }}
          >
            {data.map(({ title }, index) => (
              <li key={index}>
                <span
                  className="flex items-center justify-center py-4 px-1 md:hidden"
                  onClick={() =>
                    setShowSectionList((previousState) => !previousState)
                  }
                >
                  <span
                    className={`flex h-2 w-2 rounded-full md:hidden ${
                      index === activeSection - 1
                        ? 'bg-theme-contrary'
                        : 'bg-apple-gray-4'
                    }`}
                  ></span>
                </span>

                <span
                  className={`switch__option relative hidden md:flex ${
                    index === activeSection - 1 ? 'text-theme-contrary' : ''
                  }`}
                  onClick={() => activateSection(index + 1)}
                >
                  {title}
                </span>
              </li>
            ))}

            <span
              className="switch__indicator hidden overflow-hidden rounded-full duration-500 md:hidden dark:md:flex"
              style={{
                width: `${100 / data.length}%`,
                transform: `translate(${
                  activeSection === 0
                    ? '-100'
                    : activeSection === 1
                    ? '0'
                    : (activeSection - 1) * 100
                }%, -50%)`
              }}
            >
              <motion.span
                className="absolute left-0 top-0 right-0 h-full origin-[0%] rounded-full transition"
                style={{ scaleX }}
              ></motion.span>
            </span>
          </ul>

          <span className="absolute top-0 -right-2.5 hidden h-full w-12 rounded-r-full bg-apple-gray-6 md:block"></span>
        </div>

        <button
          className={`interactive group absolute top-1/2 z-40 -translate-y-1/2 rounded-full bg-apple-gray-6 p-3 duration-300 hover:duration-150 md:p-4 ${
            heroSectionIsOnScreen
              ? 'right-0 scale-50'
              : '-right-[3.25rem] scale-100 md:-right-[4.25rem]'
          }`}
          onClick={() => activateSection(0)}
        >
          <ChevronDoubleUpIcon className="h-4 w-4 group-hover:fill-theme-contrary" />
        </button>
      </div>
    </header>
  );
};

export default Navigation;

interface SectionListProps {
  data?: { title: string; content: JSX.Element }[];
  activateSection: (index: number) => void;
  activeSection: number;
  setShowSectionList: React.Dispatch<React.SetStateAction<boolean>>;
}

const SectionList: React.FC<SectionListProps> = ({
  data = defaultPageSectionData,
  activeSection,
  activateSection,
  setShowSectionList
}) => {
  const onClickHandler = (index: number) => {
    activateSection(index + 1);
    setShowSectionList(false);
  };

  return (
    <div className="invisible absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-0 animate-navigationControl rounded-xl bg-apple-gray-6 opacity-0">
      <ul>
        {data.map(({ title }, index) => (
          <li
            key={index}
            className={`cursor-pointer whitespace-nowrap px-6 py-4 transition ${
              index !== data.length - 1 ? 'border-b border-apple-gray-5' : ''
            } ${index === activeSection - 1 ? 'text-theme-contrary' : ''}`}
            onClick={() => onClickHandler(index)}
          >
            {title}
          </li>
        ))}
      </ul>
    </div>
  );
};
