import type { ReactNode } from 'react';

import { CircleIcon } from 'lucide-react';

import { Accordion } from '@/components/atoms/accordion';
import { AnimatedProgress } from '@/components/atoms/animated-progress';
import { Avatar } from '@/components/atoms/avatar';
import { Badge } from '@/components/atoms/badge';
import { Blockquote } from '@/components/atoms/blockquote';
import { BrandLogo } from '@/components/atoms/brand-logo';
import { Button } from '@/components/atoms/button';
import { Divider } from '@/components/atoms/divider';
import { ExperienceBar } from '@/components/atoms/experience-bar';
import { ExternalLink } from '@/components/atoms/external-link';
import { Marker } from '@/components/atoms/marker';
import { Markup } from '@/components/atoms/markup';
import { Toggle } from '@/components/atoms/toggle';
import { Tooltip } from '@/components/atoms/tooltip';
import { Ul } from '@/components/atoms/ul';

export interface ComponentGroup {
  groupName: string;
  groupIcon: ReactNode;
  children: {
    animatable: boolean;
    componentName: string;
    component: ReactNode;
  }[];
}

export const components: ComponentGroup[] = [
  {
    groupName: 'Atoms',
    groupIcon: <CircleIcon />,
    children: [
      {
        animatable: false,
        componentName: 'Accordion',
        component: (
          <Accordion title="Open me">
            <p>Yes, i am a Accordion</p>
          </Accordion>
        )
      },
      {
        animatable: true,
        componentName: 'Animated Progress',
        component: <AnimatedProgress size={32} strokeWidth={5} progress={80} />
      },
      {
        animatable: false,
        componentName: 'Avatar',
        component: <Avatar width={36} height={36} />
      },
      {
        animatable: false,
        componentName: 'Badge',
        component: <Badge size="small">Badge</Badge>
      },
      {
        animatable: false,
        componentName: 'Blockquote',
        component: <Blockquote>I am a blockquote.</Blockquote>
      },
      {
        animatable: false,
        componentName: 'Button',
        component: <Button>Button</Button>
      },
      {
        animatable: false,
        componentName: 'Brand Logo',
        component: <BrandLogo brand="Figma" className="size-16" />
      },
      {
        animatable: false,
        componentName: 'Divider',
        component: <Divider />
      },
      {
        animatable: true,
        componentName: 'Experience Bar',
        component: <ExperienceBar progress="Professional" />
      },
      {
        animatable: false,
        componentName: 'External Link',
        component: (
          <ExternalLink
            href="https://bradfrost.com"
            title="Atomic Design by Brad Frost"
            aria-label="Atomic Design by Brad Frost"
          >
            Atomic Design
          </ExternalLink>
        )
      },
      {
        animatable: true,
        componentName: 'Marker',
        component: <Marker color="primary">Highlight me</Marker>
      },
      {
        animatable: false,
        componentName: 'Markup',
        component: <Markup withBackticks={false}>Markup.tsx</Markup>
      },
      {
        animatable: false,
        componentName: 'Toggle',
        component: <Toggle />
      },
      {
        animatable: false,
        componentName: 'Tooltip',
        component: (
          <Tooltip text="More text" position="bottom">
            Tooltip
          </Tooltip>
        )
      },
      {
        animatable: false,
        componentName: 'List',
        component: (
          <Ul>
            <li>I am a list</li>
            <li>Do you like lists?</li>
            <li>We can organize</li>
          </Ul>
        )
      }
    ]
  },
  {
    groupName: 'Molecules',
    groupIcon: <CircleIcon />,
    children: []
  },
  {
    groupName: 'Organisms',
    groupIcon: <CircleIcon />,
    children: []
  },
  {
    groupName: 'Templates',
    groupIcon: <CircleIcon />,
    children: []
  },
  {
    groupName: 'Pages',
    groupIcon: <CircleIcon />,
    children: []
  }
];
