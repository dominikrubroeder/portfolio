import IntroductionSection from '../components/sections/introduction-section';
import HomeHeroSection from '@/components/home-page/home-hero-section';
import ProjectSection from '@/components/sections/project-section';
import ToolSection from '@/components/sections/tool-section';
import TechnologySection from '@/components/sections/technology-section';
import SocialSection from '@/components/sections/social-section';
import Button from '@/components/atoms/button';
import ReactIcon from '@/components/ui/svg/react-icon';
import NextJsIcon from '@/components/ui/svg/next-js-icon';
import TailwindCssIcon from '@/components/ui/svg/tailwind-css-icon';
import TypescriptIcon from '@/components/ui/svg/typescript-icon';
import FramerMotionIcon from '@/components/ui/svg/framer-motion-icon';

export default function HomePage() {
  return (
    <>
      <HomeHeroSection />

      <IntroductionSection />

      <section>
        <h3>My tech stack</h3>
        <ul className="flex items-center gap-4">
          <li>
            <Button variant="secondary">
              <ReactIcon />
            </Button>
          </li>

          <li>
            <Button variant="secondary">
              <NextJsIcon />
            </Button>
          </li>

          <li>
            <Button variant="secondary">
              <TypescriptIcon />
            </Button>
          </li>

          <li>
            <Button variant="secondary">
              <TailwindCssIcon />
            </Button>
          </li>

          <li>
            <Button variant="secondary">
              <FramerMotionIcon />
            </Button>
          </li>
        </ul>
      </section>

      <ProjectSection />

      <ToolSection />

      <TechnologySection />

      <SocialSection />
    </>
  );
}
