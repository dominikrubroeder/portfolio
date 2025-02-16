import IntroductionSection from '../components/organisms/introduction';
import HomeHero from '@/components/organisms/home-hero';
import ProjectSection from '@/components/organisms/project-section';
import Tools from '@/components/organisms/tools/tools';
import Technologies from '../components/organisms/technologies/technologies';
import SocialSection from '../components/organisms/socials';
import React from 'react';
import ControlBar from '@/components/molecules/control-bar/control-bar';
import { ControlBarSections } from '@/types';
import WhatIsAUxEngineer from '@/components/organisms/introduction/what-is-a-ux-engineer';
import UxDesigner from '@/components/organisms/introduction/ux-designer';
import UxEngineer from '@/components/organisms/introduction/ux-engineer';
import DesignEngineerVsUxEngineer from '@/components/organisms/introduction/design-engineer-vs-ux-engineer';
import Section from '@/components/organisms/section';

const sections: ControlBarSections = [
  {
    id: 'header',
    label: 'Start',
    icon: 'HomeIcon',
    className: 'md:hidden',
    defaultActive: true
  },
  {
    id: 'introduction',
    label: 'Introduction',
    icon: 'ArrowRightCircleIcon',
    className: '',
    defaultActive: false
  },
  {
    id: 'projects',
    label: 'Projects',
    icon: 'DocumentDuplicateIcon',
    className: '',
    defaultActive: false
  },
  {
    id: 'tools',
    label: 'Tools',
    icon: 'PaintBrushIcon',
    className: '',
    defaultActive: false
  },
  {
    id: 'technologies',
    label: 'Technologies',
    icon: 'Cog6ToothIcon',
    className: '',
    defaultActive: false
  },
  {
    id: 'socials',
    label: 'Socials',
    icon: 'CheckBadgeIcon',
    className: '',
    defaultActive: false
  }
];

export default function HomePage() {
  return (
    <div className="animate-fade-up-1rem">
      <HomeHero />

      <div className="space-y-32">
        <ControlBar sections={sections} collapse={false} />

        <IntroductionSection />

        <ProjectSection />

        <Tools />

        <Technologies />

        <SocialSection />

        <Section>
          <div
            className="mx-auto w-full max-w-(--breakpoint-sm)"
            id="accordion-group"
          >
            <WhatIsAUxEngineer />
            <UxDesigner />
            <UxEngineer />
            <DesignEngineerVsUxEngineer />
          </div>
        </Section>
      </div>
    </div>
  );
}
