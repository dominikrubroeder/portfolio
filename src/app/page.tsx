import TechnologySection from '@/components/technology/TechnologySection';
import ToolSection from '@/components/tool/ToolSection';
import SocialSection from '@/components/social/SocialSection';
import ProjectSection from '@/components/projects/ProjectSection';
import HomeHeroSection from '@/components/heros/HomeHeroSection';

export default function HomePage() {
  return (
    <>
      <HomeHeroSection />

      <ProjectSection />

      <ToolSection />

      <TechnologySection />

      <SocialSection />
    </>
  );
}
