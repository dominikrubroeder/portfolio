import Head from 'next/head';
import { useRef, useState } from 'react';
import TrackableSection from '../components/TrackableSection';
import Switch from '../components/ui/Switch';
import useIsOnScreen from '../hooks/useIsOnScreen';
import { ChevronDoubleUpIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import PageNavigation from '../components/PageNavigation';
import { homePageSectionData, themeSwitchData } from '../data';

export default function Home() {
  const heroSectionRef = useRef<null | HTMLElement>(null);
  const heroSectionIsOnScreen = useIsOnScreen(heroSectionRef, 0.01);
  const [activeSection, setActiveSection] = useState(0);

  const activateSection = (index: number) => {
    setActiveSection(index);

    const element = document.getElementById(`section-${index}`);

    element?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
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

      <div className="fixed left-0 bottom-0 right-0 block h-16 w-full bg-gradient-to-t from-theme-base to-transparent"></div>

      <Switch
        data={themeSwitchData}
        as="theme-switch"
        className="mx-auto mt-4 w-min"
      />

      <section ref={heroSectionRef}>
        <TrackableSection
          className="flex min-h-screen-navigation-theme-switch items-center justify-center px-4"
          id={0}
          setActiveSection={setActiveSection}
        >
          <div className="text-center">
            <h1 className="text-gradient bg-gradient-to-t from-apple-purple to-apple-pink text-7xl font-bold sm:text-9xl">
              Team frontend.
            </h1>

            <p>Development and interface design</p>
            <p>
              Love for Animations and Transitions.
              {/* <ReactTypingEffect text={['Animations.', 'Transitions.']} /> */}
            </p>
          </div>
        </TrackableSection>
      </section>

      <header
        className={`z-50 mt-4 flex gap-2 lg:-mt-4 ${
          !heroSectionIsOnScreen
            ? 'fixed bottom-6 lg:sticky lg:top-4'
            : 'relative'
        } `}
      >
        <button
          className={`interactive absolute top-1/2 z-40 -translate-y-1/2 rounded-full bg-apple-gray-6 p-1.5 duration-300 hover:duration-150 lg:p-2 ${
            heroSectionIsOnScreen
              ? 'left-0 scale-50'
              : '-left-[3.25rem] scale-100 lg:-left-20'
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

        <PageNavigation
          data={homePageSectionData}
          activeSection={activeSection}
          activateSection={activateSection}
        />

        <button
          className={`interactive group absolute top-1/2 z-40 -translate-y-1/2 rounded-full bg-apple-gray-6 p-3 duration-300 hover:duration-150 lg:p-4 ${
            heroSectionIsOnScreen
              ? 'right-0 scale-50'
              : '-right-[3.25rem] scale-100 lg:-right-20'
          }`}
          onClick={() => activateSection(0)}
        >
          <ChevronDoubleUpIcon className="h-4 w-4 group-hover:fill-theme-contrary" />
        </button>
      </header>

      {homePageSectionData.map(({ content }, index) => (
        <TrackableSection
          key={index}
          className={`flex min-h-screen items-center justify-center px-4 lg:px-0 ${
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
