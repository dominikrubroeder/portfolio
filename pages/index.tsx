import { useRef, useState } from 'react';
import Section from '../components/navigation/Section';
import useIsOnScreen from '../hooks/useIsOnScreen';
import Navigation from '../components/navigation/Navigation';
import { homePageSectionData } from '../data';
import ToolsAndTechnologies from '../components/sections/ToolsAndTechnologies';
import Projects from '../components/sections/Projects';
import Socials from '../components/sections/Socials';
import ThemeSwitch from '../components/ThemeSwitch';
import Layout from '../components/layout';

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
    <Layout>
      <section ref={heroSectionRef}>
        <div className="mt-4 flex items-center justify-center gap-4">
          <ThemeSwitch />
        </div>

        <Section
          className="flex min-h-screen-navigation-theme-switch items-center justify-center px-4"
          id={0}
          setActiveSection={setActiveSection}
        >
          <div className="text-center">
            <h1 className="text-gradient bg-gradient-to-t from-apple-purple to-apple-pink text-7xl font-bold sm:text-9xl">
              Team frontend.
            </h1>

            <p>Development and interface design</p>
            {/* Interface Developtment */}
            <p>
              Love for supportive Animations and Transitions.
              {/* <ReactTypingEffect text={['Animations.', 'Transitions.']} /> */}
            </p>
          </div>
        </Section>
      </section>

      <Navigation
        data={homePageSectionData}
        heroSectionIsOnScreen={heroSectionIsOnScreen}
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
