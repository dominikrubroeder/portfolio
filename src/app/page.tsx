import IntroductionSection from '@/components/organisms/sections/introduction-section';
import HomeHeroSection from '@/components/home-page/home-hero-section';
import ProjectSection from '@/components/organisms/sections/project-section';
import ToolSection from '@/components/organisms/sections/tool-section';
import TechnologySection from '@/components/organisms/sections/technology-section';
import SocialSection from '@/components/organisms/sections/social-section';

export default function HomePage() {
  return (
    <div className="md:space-y-24">
      <HomeHeroSection />

      <IntroductionSection />

      <ProjectSection />

      <ToolSection />

      <TechnologySection />

      <SocialSection />
    </div>
  );
}
