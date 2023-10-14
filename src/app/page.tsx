'use client';

import { useRef, useState } from 'react';
import useIsInView from '../hooks/useIsInView';
import Layout from '../components/layout';
import ThemeSwitch from '../components/ThemeSwitch';
import Navigation from '../components/navigation/Navigation';
import { homePageSectionData } from '../data';
import Section from '../components/navigation/Section';
import ToolsAndTechnologies from '../components/sections/ToolsAndTechnologies';
import Projects from '../components/sections/Projects';
import Socials from '../components/sections/Socials';

export default function Home() {
  const heroSectionRef = useRef<null | HTMLElement>(null);
  const heroSectionIsInView = useIsInView(heroSectionRef, 0.01);
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
    <Layout>
      <section className="flex min-h-[calc(100vh-80px)] flex-col items-center justify-center gap-2">
        <h2 className="text-gradient bg-gradient-to-t from-apple-purple to-apple-pink text-7xl font-bold sm:text-9xl">
          Team frontend.
        </h2>

        <div>
          <h1>
            Love for supportive animations and transitions | UX Engineering |
            Frontend Development
            {/* <ReactTypingEffect text={['Animations.', 'Transitions.']} /> */}
          </h1>
        </div>

        <div className="mt-4 flex items-center justify-center gap-4">
          <ThemeSwitch />
        </div>
      </section>

      <Navigation
        data={homePageSectionData}
        heroSectionIsOnScreen={heroSectionIsInView}
        activeSection={activeSection}
        activateSection={activateSection}
      />

      <Section
        className="mt-8 px-4 lg:px-0"
        id={1}
        setActiveSection={setActiveSection}
      >
        <ToolsAndTechnologies />
      </Section>

      <Section
        className="flex-center min-h-screen px-4 lg:px-0"
        id={2}
        setActiveSection={setActiveSection}
      >
        <Projects />
      </Section>

      <Section
        className="flex-center min-h-screen px-4 lg:px-0"
        id={3}
        setActiveSection={setActiveSection}
      >
        <Socials />
      </Section>
    </Layout>
  );
}
