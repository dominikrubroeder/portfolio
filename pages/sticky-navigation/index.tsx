import Head from 'next/head';
import { useEffect, useRef, useState } from 'react';
import TrackableSection from '../../components/TrackableSection';
import Switch from '../../components/ui/Switch';
import useIsOnScreen from '../../hooks/useIsOnScreen';
import { ChevronDoubleUpIcon } from '@heroicons/react/24/solid';

const pageData = [
  {
    content: <p>Section 1</p>
  },
  {
    content: <p>Section 2</p>
  },
  {
    content: <p>Section 3</p>
  }
];

export default function Home() {
  const heroSectionRef = useRef<null | HTMLElement>(null);
  const heroSectionIsOnScreen = useIsOnScreen(heroSectionRef, 0.01);
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

  useEffect(() => console.log(activeSection), [activeSection]);

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
          className="flex min-h-screen-head-navigation items-center justify-center"
          id={0}
          setActiveSection={setActiveSection}
        >
          <p>Hero section</p>
        </TrackableSection>
      </section>

      <div className="sticky top-4 flex gap-2">
        <Switch
          data={[
            { option: 'Section 1', value: 'Section 1' },
            { option: 'Section 2', value: 'Section 2' },
            { option: 'Section 3', value: 'Section 3' }
          ]}
          as="page-navigation"
          activeOption={activeSection}
          activateSection={activateSection}
          className="z-50"
        />

        <button
          className={`interactive absolute top-1/2 z-40 -translate-y-1/2 rounded-full bg-apple-gray-6 p-5 duration-300 hover:duration-150 ${
            heroSectionIsOnScreen ? 'right-0 scale-50' : '-right-16 scale-100'
          }`}
          onClick={() => activateSection(0)}
        >
          <ChevronDoubleUpIcon className="h-4 w-4" />
        </button>
      </div>

      {pageData.map(({ content }, index) => (
        <TrackableSection
          key={index}
          className={` flex min-h-screen items-center justify-center ${
            index === 0 ? 'mt-8' : ''
          }`}
          id={index + 1}
          setActiveSection={setActiveSection}
        >
          {content}
        </TrackableSection>
      ))}
    </>
  );
}
