import Head from 'next/head';
import { useRef, useState } from 'react';
import TrackableSection from '../components/TrackableSection';
import Switch from '../components/ui/Switch';
import useIsOnScreen from '../hooks/useIsOnScreen';
import { ChevronDoubleUpIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import PageNavigation from '../components/PageNavigation';

const pageData = [
  {
    content: <p>Section 1</p>
  },
  { content: <p>Section 2</p> },
  {
    content: <p>Section 3</p>
  },
  {
    content: <p>Section 4</p>
  }
];

export default function Home() {
  const heroSectionRef = useRef<null | HTMLElement>(null);
  const heroSectionIsOnScreen = useIsOnScreen(heroSectionRef, 0.01);
  const [activeSection, setActiveSection] = useState(0);

  const activateSection = (index: number) => {
    setActiveSection(index);

    const element = document.getElementById(`section-${index}`);

    element?.scrollIntoView({
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

      <Switch
        data={[
          { option: 'Dark', value: 'dark' },
          { option: 'Light', value: 'light' },
          { option: 'Auto', value: 'auto' }
        ]}
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
        className={`flex gap-2 ${
          !heroSectionIsOnScreen
            ? 'fixed bottom-4 lg:sticky lg:top-4'
            : 'relative'
        } `}
      >
        <button
          className={`interactive absolute top-1/2 z-40 -translate-y-1/2 rounded-full bg-apple-gray-6 p-2 duration-300 hover:duration-150 ${
            heroSectionIsOnScreen
              ? 'left-0 scale-50'
              : '-left-16 scale-100 lg:-left-20'
          }`}
          onClick={() => activateSection(0)}
        >
          <Image
            src="/images/avatar-square.jpg"
            width={32}
            height={32}
            alt="Logo"
            className="rounded-full"
            priority
          />
        </button>

        <PageNavigation
          activeSection={activeSection}
          activateSection={activateSection}
        />

        <button
          className={`interactive group absolute top-1/2 z-40 -translate-y-1/2 rounded-full bg-apple-gray-6 p-4 duration-300 hover:duration-150 ${
            heroSectionIsOnScreen
              ? 'right-0 scale-50'
              : '-right-16 scale-100 lg:-right-20'
          }`}
          onClick={() => activateSection(0)}
        >
          <ChevronDoubleUpIcon className="h-4 w-4 group-hover:fill-theme-contrary" />
        </button>
      </header>

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
