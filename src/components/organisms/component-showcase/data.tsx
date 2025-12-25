import type { ReactNode } from 'react';

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
import { AtomIcon, MoleculeIcon, TemplateIcon } from '@/components/atoms/svg';
import { OrganismnIcon } from '@/components/atoms/svg/organism-icon';
import { PageIcon } from '@/components/atoms/svg/page-icon';
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
  groupDescription: ReactNode;
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
      'This is where the actual elements are starting. Getting on the metaphor from before, those are the elements in your closet like your T-Shirts, your caps, the accessories, or hair ties – all standalone things, which can be added together to build a bigger outfit. And they can vary in different color, sizes and other variations and properties.',
    groupIcon: <AtomIcon />,
    layoutOption: '3-cols',
    children: [
      {
        componentId: 'accordion',
        componentName: 'Accordion',
        component: (
          <Accordion
            variant="default"
            items={[
              {
                title: 'You can open me',
                children: <p>Yes, i am a Accordion</p>
              },
              {
                title: 'Which component library are you using?',
                children: (
                  <p>Most probably, shadcn/ui or Base UI – good choices.</p>
                )
              },
              {
                title: 'Complete this group',
                children: <p>Completed.</p>
              }
            ]}
            accordionGroupId="accordion-group-component-showcase"
          />
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
      'Molecules are one step up from Atoms, they slowly show how the outfit is being worn together. Combine your blue T-Shirt with a black Hoodie, and you have your upper body styled up. So Molecules use Atoms to build bigger groups of user interface elements – the good thing is, adjust one Atom, and it is being adjusted in all places where it is getting used as well.',
    groupIcon: <MoleculeIcon />,
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
      'Organisms – like you may can imagine from now on – are again one step above Atoms and Molecules. Here we have a complete outfit together – a full, standalone feature or text section like a Newsletter section, or a Hero banner on your Home page. They are reusable building blocks, which can be inserted in as many places as desired – with one single source of truth for applying changes to this exact element.',
    groupIcon: <OrganismnIcon />,
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
    groupDescription: (
      <>
        <p>
          But, what are Template then? Well, templates define the structure of
          your page. They are not the page itself, they just tell about the
          order and the layout of the content. Hero banner at the top, big image
          of your product in second row... especially for pages where things are
          being duplicated, and only the content changes accordingly to dynamic
          data, this is a golden thing to have. A proper use case are for
          example Product Listing pages (PLPs) or Category pages – where the
          structure is always the same, but the text, images and products are
          changing based on the current category.
        </p>
        <p>
          Templates prepare the page from being rendered with the real content.
          But of course you don&#39;t have to overdo this, if your page is only
          present once, and it is not getting reused somewhere else, you
          don&#39;t have to create a template for it.
        </p>
      </>
    ),
    groupIcon: <TemplateIcon />,
    layoutOption: 'rows',
    children: []
  },
  {
    groupName: 'Pages',
    groupDescription: '',
    groupIcon: <PageIcon />,
    layoutOption: 'rows',
    children: []
  }
];
