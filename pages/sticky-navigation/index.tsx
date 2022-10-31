import Head from 'next/head';
import { useRef, useState } from 'react';
import TrackableSection from '../../components/TrackableSection';
import Switch from '../../components/ui/Switch';
import useIsOnScreen from '../../hooks/useIsOnScreen';
import { ChevronDoubleUpIcon } from '@heroicons/react/24/solid';

const pageData = [
  {
    content: <p>Section 1</p>
  },
  {
    content: <p>Section 1</p>
  },
  {
    content: <p>Section 3</p>
  }
];

export default function Home() {
  const heroSectionRef = useRef<null | HTMLElement>(null);
  const heroSectionIsOnScreen = useIsOnScreen(heroSectionRef);
  const [activeSection, setActiveSection] = useState(0);

  const activateSection = (index: number) => {
    setActiveSection(index);

    const element = document.getElementById(`section-${index}`);

    element.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
      inline: 'nearest'
    });
  };

  return (
    <>
      <Head>
        <title>
          Dominik Rubröder | Team frontend development and interface design
        </title>
        <meta
          name="description"
          content="Dominik Rubröder | Team frontend development and interface design | Love for animations and transitions"
        />
        <link rel="icon" href="/favicon.png" type="image/png" />
      </Head>

      <section ref={heroSectionRef}>
        <TrackableSection
          className="flex min-h-screen-head items-center justify-center"
          id={0}
          setActiveSection={setActiveSection}
        >
          <p>Hero section</p>
        </TrackableSection>
      </section>

      <div
        className={`sticky top-4 flex gap-2 ${
          heroSectionIsOnScreen ? '-mt-20' : 'mt-0'
        }`}
      >
        <Switch
          data={['Hero', 'Section 1', 'Section 2', 'Section 3']}
          as="page-navigation"
          activeSection={activeSection}
          activateSection={activateSection}
        />

        {!heroSectionIsOnScreen && (
          <button>
            <ChevronDoubleUpIcon
              className="h-4 w-4"
              onClick={() => activateSection(0)}
            />
          </button>
        )}
      </div>

      {pageData.map(({ content }, index) => (
        <TrackableSection
          key={index}
          className={` flex min-h-screen items-center justify-center ${
            index === 0 ? 'mt-8' : ''
          }`}
          id={index}
          setActiveSection={setActiveSection}
        >
          {content}
        </TrackableSection>
      ))}
    </>
  );
}
