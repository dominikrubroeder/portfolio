import ControlBar from '@/components/navigation/ControlBar';
import TechnologySection from '@/components/technology/TechnologySection';
import ToolSection from '@/components/tools/ToolSection';
import SocialSection from '@/components/social/SocialSection';
import ProjectSection from '@/components/projects/ProjectSection';
import HomeHeroSection from '@/components/hero/HomeHeroSection';

const sections = [
  { id: 'projects', label: 'Projects' },
  { id: 'tools', label: 'Tools' },
  { id: 'technologies', label: 'Technologies' },
  { id: 'socials', label: 'Socials' }
];

export default function HomePage() {
  return (
    <>
      <HomeHeroSection />

      <ControlBar sections={sections} />

      <ProjectSection />

      <ToolSection />

      <TechnologySection />

      <SocialSection />
    </>
  );
}
