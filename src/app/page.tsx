import { HomeHero } from '@/components/organisms/home';
import { Introduction } from '@/components/organisms/introduction';
import { Projects } from '@/components/organisms/projects';
import { Tools } from '@/components/organisms/tools';
import { Technologies } from '@/components/organisms/technologies';
import { Socials } from '@/components/organisms/socials';
import {
  FaqDesignEngineerVsUxEngineer,
  FaqUxDesigner,
  FaqUxEngineer,
  FaqWhatIsAUxEngineer
} from '@/components/organisms/faq';
import DesignModeBackground from '@/components/atoms/design-mode-background';

export default async function HomePage() {
  return (
    <div className="animate-fade-up-1rem space-y-6">
      <DesignModeBackground />

      <HomeHero />

      <div className="mx-auto space-y-12 px-4 sm:max-w-(--readable-container) lg:px-0">
        <Introduction />

        <hr />

        <Projects />

        <hr />

        <Tools />

        <hr />

        <Technologies />

        <hr />

        <Socials />

        <hr />

        <div className="space-y-8">
          <header className="space-y-6">
            <h2>
              <span>QA</span>
              <span className="text-muted-foreground">
                Some questions and answers about UX design engineering
              </span>
            </h2>
          </header>

          <div id="accordion-group">
            <FaqWhatIsAUxEngineer />
            <FaqUxDesigner />
            <FaqUxEngineer />
            <FaqDesignEngineerVsUxEngineer />
          </div>
        </div>
      </div>
    </div>
  );
}
