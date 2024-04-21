import IntroductionSection from '../components/sections/introduction-section';
import { Suspense } from 'react';
import HomeHeroSectionLoading from '@/components/home-page/home-hero-section-loading';
import HomeHeroSection from '@/components/home-page/home-hero-section';
import ProjectSection from '@/components/sections/project-section';
import ToolSection from '@/components/sections/tool-section';
import TechnologySection from '@/components/sections/technology-section';
import SocialSection from '@/components/sections/social-section';
import WorkedForSection from '@/components/sections/worked-for-section/worked-for-section';

export default function HomePage() {
  return (
    <>
      <Suspense fallback={<HomeHeroSectionLoading />}>
        <HomeHeroSection />
      </Suspense>

      <IntroductionSection />

      <WorkedForSection />

      <ProjectSection />

      <ToolSection />

      <TechnologySection />

      <SocialSection />
    </>
  );
}
