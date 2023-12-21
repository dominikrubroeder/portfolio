import ControlBar from '@/components/navigation/ControlBar';
import TechnologySection from '@/components/technology/TechnologySection';
import ToolSection from '@/components/tools/ToolSection';
import SocialSection from '@/components/social/SocialSection';
import ProjectSection from '@/components/projects/ProjectSection';
import HomeHeroSection from '@/components/hero/HomeHeroSection';

export default function HomePage() {
  return (
    <>
      <HomeHeroSection />

      <ControlBar />

      <ProjectSection />

      <ToolSection />

      <TechnologySection />

      <SocialSection />
    </>
  );
}
