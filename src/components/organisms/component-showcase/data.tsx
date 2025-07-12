import type { ReactNode } from 'react';

import { CircleIcon } from 'lucide-react';

import { Accordion } from '@/components/atoms/accordion';
import { AnimatedProgress } from '@/components/atoms/animated-progress';
import { Avatar } from '@/components/atoms/avatar';
import { Badge } from '@/components/atoms/badge';
import { Blockquote } from '@/components/atoms/blockquote';
import { BrandLogo } from '@/components/atoms/brand-logo';
import { Button } from '@/components/atoms/button';
import { CodeBlock } from '@/components/atoms/codeblock';
import { Divider } from '@/components/atoms/divider';
import { ExperienceBar } from '@/components/atoms/experience-bar';
import { ExternalLink } from '@/components/atoms/external-link';
import { Marker } from '@/components/atoms/marker';
import { Markup } from '@/components/atoms/markup';
import { TextDecoration } from '@/components/atoms/text-decoration';
import { Toggle } from '@/components/atoms/toggle';
import { Tooltip } from '@/components/atoms/tooltip';
import { Ul } from '@/components/atoms/ul';
import { Animate } from '@/components/molecules/animate';
import { DesignDrawer } from '@/components/molecules/drawer';
import { Introduction } from '@/components/organisms/introduction';

export interface ComponentGroup {
  groupName: string;
  groupIcon: ReactNode;
  groupDescription: string;
  layoutOption: '3-cols' | '2-cols' | 'rows';
  children: {
    componentId: string;
    componentName: string;
    component: ReactNode;
    animatable: boolean;
    // TODO: add `animate-appearance`
  }[];
}

export const components: ComponentGroup[] = [
  {
    groupName: 'Atoms',
    groupDescription:
      'Here are the actual elements starting. Atoms are like Socks, T-Shirts or a Basecaps, which can be standalone components that can be added together to build a bigger group.',
    groupIcon: <CircleIcon />,
    layoutOption: '3-cols',
    children: [
      {
        componentId: 'accordion',
        componentName: 'Accordion',
        component: (
          <Accordion title="You can open me">
            <p>Yes, i am a Accordion</p>
          </Accordion>
        ),
        animatable: false
      },
      {
        componentId: 'animated-progress',
        componentName: 'Animated Progress',
        component: <AnimatedProgress size={32} strokeWidth={5} progress={80} />,
        animatable: true
      },
      {
        componentId: 'avatar',
        componentName: 'Avatar',
        component: <Avatar width={36} height={36} />,
        animatable: false
      },
      {
        componentId: 'badge',
        componentName: 'Badge',
        component: <Badge size="small">Badge</Badge>,
        animatable: false
      },
      {
        componentId: 'blockquote',
        componentName: 'Blockquote',
        component: <Blockquote>I am a blockquote.</Blockquote>,
        animatable: false
      },
      {
        componentId: 'button',
        componentName: 'Button',
        component: <Button>Button</Button>,
        animatable: false
      },
      {
        componentId: 'brand-logo',
        componentName: 'Brand Logo',
        component: <BrandLogo brand="Figma" className="size-16" />,
        animatable: false
      },
      {
        componentId: 'code-block',
        componentName: 'Code Block',
        component: (
          <CodeBlock
            fileName="globals.css"
            code={`:root {
    --background: hsl(0 0% 100%);
    --foreground: hsl(0 0% 18.8%);
    --primary: hsl(255 92% 65%);
    --primary-foreground: hsl(0 0% 100%);
    --primary-hover: hsl(255 92% 69%);
    --muted: hsl(240 23.8% 95.9%);
    --muted-foreground: hsl(240 2.3% 44%);
    --muted-hover: hsl(240, 7%, 83%);
    --border: hsl(0 0% 92%);
    --hover: hsl(240 23.8% 95.9%);
    --radius: 6px;
    --radius-md: calc(var(--radius) - 2px);
    --radius-sm: calc(var(--radius) - 4px);
    --container: 96rem;
    --readable-container: 48rem;
}`}
            className="border-none p-0"
          />
        ),
        animatable: false
      },
      {
        componentId: 'divider',
        componentName: 'Divider',
        component: <Divider />,
        animatable: false
      },
      {
        componentId: 'experience-bar',
        componentName: 'Experience Bar',
        component: <ExperienceBar progress="Professional" />,
        animatable: true
      },
      {
        componentId: 'external-link',
        componentName: 'External Link',
        component: (
          <ExternalLink
            href="https://bradfrost.com"
            title="Atomic Design by Brad Frost"
            aria-label="Atomic Design by Brad Frost"
          >
            Atomic Design
          </ExternalLink>
        ),
        animatable: false
      },
      {
        componentId: 'marker',
        componentName: 'Marker',
        component: <Marker color="primary">Highlight me</Marker>,
        animatable: true
      },
      {
        componentId: 'markup',
        componentName: 'Markup',
        component: <Markup backticks={false}>Markup.tsx</Markup>,
        animatable: false
      },
      {
        componentId: 'text-decoration',
        componentName: 'Text Decoration',
        component: (
          <TextDecoration size="xs">Look, i&#39;m decorated</TextDecoration>
        ),
        animatable: false
      },
      {
        componentId: 'toggle',
        componentName: 'Toggle',
        component: <Toggle />,
        animatable: false
      },
      {
        componentId: 'tool-tip',
        componentName: 'Tooltip',
        component: (
          <Tooltip text="More text" position="bottom">
            Tooltip
          </Tooltip>
        ),
        animatable: false
      },
      {
        componentId: 'list',
        componentName: 'List',
        component: (
          <Ul>
            <li>I am a list</li>
            <li>Do you like lists?</li>
            <li>We can organize</li>
          </Ul>
        ),
        animatable: false
      }
    ]
  },
  {
    groupName: 'Molecules',
    groupDescription:
      'Molecules are one step up from Atoms, they slowly show how the _outfit_ is worn together. Combine a T-Shirt with a Hoodie, and you have your upper body styled up.',
    groupIcon: <CircleIcon />,
    layoutOption: '2-cols',
    children: [
      {
        componentId: 'animate',
        componentName: 'Animate',
        component: (
          <Animate direction="up">
            <Button>Animate me in! 🚀</Button>
          </Animate>
        ),
        animatable: true
      },
      {
        componentId: 'drawer',
        componentName: 'Drawer',
        component: <DesignDrawer />,
        animatable: false
      }
    ]
  },
  {
    groupName: 'Organisms',
    groupDescription:
      'There we go, organisms build a complete outfit. The hoodie, combined with a T-Shirt, jeans and a cap. A complete outfit – see this analogy for organisms as a complete, standalone fully-functioning feature or section integration.',
    groupIcon: <CircleIcon />,
    layoutOption: '2-cols',
    children: [
      {
        componentId: 'introduction',
        componentName: 'Introduction',
        component: <Introduction />,
        animatable: false
      }
    ]
  },
  {
    groupName: 'Templates',
    groupDescription:
      'But what is then? Well, templates, define the _structure_ of a complete outfit, for example, in the winter you want to wear a big coat, together with a red scarf, and a cozy pullover to keep you warm. But in the summer on the other hand, you want to wear a simple T-Shirt, shorts some sunglasses, and some cool drink in your hand. Templates prepare the whole outfit from being actually worn.',
    groupIcon: <CircleIcon />,
    layoutOption: 'rows',
    children: []
  },
  {
    groupName: 'Pages',
    groupDescription: '',
    groupIcon: <CircleIcon />,
    layoutOption: 'rows',
    children: []
  }
];
