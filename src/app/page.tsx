import IntroductionSection from '../components/organisms/introduction-section';
import HomeHeroSection from '@/components/home-page/home-hero-section';
import ProjectSection from '../components/organisms/project-section';
import ToolSection from '../components/organisms/tool-section';
import TechnologySection from '../components/organisms/technology-section';
import SocialSection from '../components/organisms/social-section';

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
