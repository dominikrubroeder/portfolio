import IntroductionSection from '../components/sections/introduction-section';
import HomeHeroSection from '@/components/home-page/home-hero-section';
import ProjectSection from '@/components/sections/project-section';
import ToolSection from '@/components/sections/tool-section';
import TechnologySection from '@/components/sections/technology-section';
import SocialSection from '@/components/sections/social-section';

export default function HomePage() {
  return (
    <>
      <HomeHeroSection />

      <IntroductionSection />

      <ProjectSection />

      <ToolSection />

      <TechnologySection />

      <SocialSection />
    </>
  );
}
