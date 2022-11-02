import React, { useState } from 'react';
import { defaultPageSectionData } from '../data';

interface PageNavigationProps {
  data?: { title: string; content: JSX.Element }[];
  activeSection: number;
  activateSection: (index: number) => void;
}

const PageNavigation: React.FC<PageNavigationProps> = ({
  data = defaultPageSectionData,
  activeSection = 0,
  activateSection
}) => {
  const [showSectionList, setShowSectionList] = useState(false);

  return (
    <div className="relative z-50 transition active:scale-95">
      <span className="absolute top-0 -left-2.5 hidden h-full w-12 rounded-l-full bg-apple-gray-6 lg:block"></span>

      {showSectionList && (
        <SectionList
          data={data}
          activeSection={activeSection}
          activateSection={activateSection}
          setShowSectionList={setShowSectionList}
        />
      )}

      <ul
        className="relative grid cursor-pointer items-center overflow-hidden rounded-full bg-apple-gray-6 px-4 lg:p-0"
        style={{ gridTemplateColumns: `repeat(${data.length}, 1fr)` }}
      >
        {data.map(({ title }, index) => (
          <li key={index}>
            <span
              className="flex items-center justify-center py-4 px-1 lg:hidden"
              onClick={() =>
                setShowSectionList((previousState) => !previousState)
              }
            >
              <span
                className={`flex h-2 w-2 rounded-full lg:hidden ${
                  index === activeSection - 1
                    ? 'bg-theme-contrary'
                    : 'bg-apple-gray-4'
                }`}
              ></span>
            </span>

            <span
              className={`switch__option relative hidden lg:flex ${
                index === activeSection - 1 ? 'text-theme-contrary' : ''
              }`}
              onClick={() => activateSection(index + 1)}
            >
              {title}
            </span>
          </li>
        ))}

        <span
          className="switch__indicator hidden lg:flex"
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
        ></span>
      </ul>

      <span className="absolute top-0 -right-2.5 hidden h-full w-12 rounded-r-full bg-apple-gray-6 lg:block"></span>
    </div>
  );
};

export default PageNavigation;

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
            className={`w-max cursor-pointer px-6 py-4 transition ${
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
