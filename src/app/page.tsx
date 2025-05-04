import { Container } from '@/components/atoms/container';

import { ControlBar } from '@/components/molecules/control-bar/control-bar';
import { ControlBarSections } from '@/components/molecules/control-bar/types/types';

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
import {
  ArrowRightCircleIcon,
  CheckBadgeIcon,
  Cog6ToothIcon,
  DocumentDuplicateIcon,
  PaintBrushIcon
} from '@heroicons/react/24/outline';
import { Suspense } from 'react';
import { FrontendVision } from '@/components/organisms/faq/frontend-vision';

const sections: ControlBarSections = [
  {
    id: 'introduction',
    label: 'Introduction',
    icon: <ArrowRightCircleIcon className="size-5" />,
    className: '',
    defaultActive: false
  },
  {
    id: 'projects',
    label: 'Projects',
    icon: <DocumentDuplicateIcon className="size-5" />,
    className: '',
    defaultActive: false
  },
  {
    id: 'tools',
    label: 'Tools',
    icon: <PaintBrushIcon className="size-5" />,
    className: '',
    defaultActive: false
  },
  {
    id: 'technologies',
    label: 'Technologies',
    icon: <Cog6ToothIcon className="size-5" />,
    className: '',
    defaultActive: false
  },
  {
    id: 'socials',
    label: 'Socials',
    icon: <CheckBadgeIcon className="size-5" />,
    className: '',
    defaultActive: false
  }
];

export default function HomePage() {
  return (
    <div className="animate-fade-up-1rem">
      <DesignModeBackground />

      <HomeHero />

      <div className="space-y-32">
        <ControlBar sections={sections} />

        <Introduction />

        <Projects />

        <div className="space-y-12">
          <Suspense>
            <Tools />
          </Suspense>

          <hr />

          <Technologies />

          <hr />

          <Socials />
        </div>

        <Container tag="section">
          <div
            className="mx-auto w-full px-4 sm:max-w-(--breakpoint-sm)"
            id="accordion-group"
          >
            <FrontendVision />
            <FaqWhatIsAUxEngineer />
            <FaqUxDesigner />
            <FaqUxEngineer />
            <FaqDesignEngineerVsUxEngineer />
          </div>
        </Container>
      </div>
    </div>
  );
}
