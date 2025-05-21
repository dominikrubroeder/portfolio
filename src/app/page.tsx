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
import { Suspense } from 'react';
import { FrontendVision } from '@/components/organisms/faq/frontend-vision';

export default function HomePage() {
  return (
    <div className="animate-fade-up-1rem">
      <DesignModeBackground />

      <HomeHero />

      <div className="mx-auto space-y-32 sm:max-w-(--breakpoint-md)">
        <Introduction />

        <div className="space-y-12">
          <Projects />

          <hr />

          <Suspense>
            <Tools />
          </Suspense>

          <hr />

          <Technologies />

          <hr />

          <Socials />

          <hr />

          <div className="space-y-8">
            <header className="space-y-6">
              <h2 className="space-x-2 text-5xl font-bold text-foreground">
                <span>QA</span>
                <span className="text-muted-foreground">
                  Some questions and answers about UX design engineering
                </span>
              </h2>
            </header>

            <div id="accordion-group">
              <FrontendVision />
              <FaqWhatIsAUxEngineer />
              <FaqUxDesigner />
              <FaqUxEngineer />
              <FaqDesignEngineerVsUxEngineer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
