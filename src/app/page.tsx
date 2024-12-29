import IntroductionSection from '@/components/organisms/introduction-section';
import HomeHeroSection from '@/components/organisms/home-hero-section';
import ProjectSection from '@/components/organisms/project-section';
import ToolSection from '@/components/organisms/tool-section';
import TechnologySection from '@/components/organisms/technology-section';
import SocialSection from '@/components/organisms/social-section';
import React from 'react';

export default function HomePage() {
  return (
    <div className="animate-fade-up-1rem md:space-y-24">
      <HomeHeroSection />

      <IntroductionSection />

      <ProjectSection />

      <ToolSection />

      <TechnologySection />

      <SocialSection />
    </div>
  );
}
