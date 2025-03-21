import { Introduction } from '@/components/organisms/introduction';
import HomeHero from '@/components/organisms/home/home-hero';
import Projects from '@/components/organisms/projects/projects';
import { Tools } from '@/components/organisms/tools';
import { Technologies } from '@/components/organisms/technologies';
import { Socials } from '@/components/organisms/socials';
import ControlBar from '@/components/molecules/control-bar/control-bar';
import { ControlBarSections } from '@/components/molecules/control-bar/types';
import WhatIsAUxEngineer from '@/components/atoms/what-is-a-ux-engineer';
import UxDesigner from '@/components/atoms/ux-designer';
import UxEngineer from '@/components/atoms/ux-engineer';
import DesignEngineerVsUxEngineer from '@/components/atoms/design-engineer-vs-ux-engineer';
import DesignModeBackground from '@/components/atoms/design-mode-background';
import {
  ArrowRightCircleIcon,
  CheckBadgeIcon,
  Cog6ToothIcon,
  DocumentDuplicateIcon,
  HomeIcon,
  PaintBrushIcon
} from '@heroicons/react/24/outline';
import Container from '@/components/organisms/container';

const sections: ControlBarSections = [
  {
    id: 'header',
    label: 'Start',
    icon: <HomeIcon className="size-5" />,
    className: 'md:hidden',
    defaultActive: true
  },
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
        <ControlBar sections={sections} collapse={false} />

        <Introduction />

        <Projects />

        <Tools />

        <Technologies />

        <Socials />

        <Container htmlTag="section">
          <div
            className="mx-auto w-full px-4 sm:max-w-(--breakpoint-sm)"
            id="accordion-group"
          >
            <WhatIsAUxEngineer />
            <UxDesigner />
            <UxEngineer />
            <DesignEngineerVsUxEngineer />
          </div>
        </Container>
      </div>
    </div>
  );
}
