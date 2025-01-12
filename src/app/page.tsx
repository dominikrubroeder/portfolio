import IntroductionSection from '@/components/organisms/introduction-section';
import HomeHeroSection from '@/components/organisms/home-hero-section';
import ProjectSection from '@/components/organisms/project-section';
import Tools from '@/components/organisms/tools/tools';
import TechnologySection from '@/components/organisms/technology-section';
import SocialSection from '@/components/organisms/social-section';
import React, { Suspense } from 'react';
import ControlBar from '@/components/molecules/control-bar/control-bar';
import { ControlBarSections } from '@/types';

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
      <HomeHeroSection />

      <div className="space-y-16">
        <Suspense>
          <ControlBar sections={sections} collapse={false} />
        </Suspense>

        <IntroductionSection />

        <ProjectSection />

        <Tools />

        <TechnologySection />

        <SocialSection />
      </div>
    </div>
  );
}
