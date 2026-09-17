'use client';

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from '@/components/molecules/tabs/tabs';
import { Ul } from '@/components/organisms/typography';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { SvgArrow, SvgVennCenter } from '@/components/atoms/svg';
import { Button } from '@/components/atoms/button';
import { ButtonGroup } from '@/components/molecules/button-group';
import { ArrowDown, ArrowRight } from 'lucide-react';
import { Markup } from '@/components/atoms/markup';

export function TabsPhilosophy() {
  const [activeTab, setActiveTab] = useState<'all' | 'design' | 'code' | 'ux'>(
    'all'
  );
  const [scope, setScope] = useState<'Design Engineering' | 'Team'>(
    'Design Engineering'
  );

  return (
    <div className="py-6">
      <div className="mb-4 flex items-center justify-end gap-6">
        <div className="text-sm">Scope</div>
        <ButtonGroup>
          <Button
            variant={
              scope === 'Design Engineering'
                ? 'contained-foreground'
                : 'ghost-muted'
            }
            onClick={() => setScope('Design Engineering')}
          >
            Design Engineering Team
          </Button>

          <Button
            variant={scope === 'Team' ? 'contained-foreground' : 'ghost-muted'}
            onClick={() => setScope('Team')}
          >
            Company wide
          </Button>
        </ButtonGroup>
      </div>

      <div className="relative">
        <div
          className="absolute top-1/2 left-0 z-10 mt-2 flex w-1/2 cursor-pointer items-center gap-4"
          onClick={() => setActiveTab('all')}
        >
          <span className="shrink-0">
            {scope === 'Design Engineering' ? 'Great UI' : 'Still Great UI'}
          </span>
          <SvgArrow />
        </div>

        <SvgVennCenter
          className="absolute top-1/2 left-1/2 z-10 mt-5 size-7 -translate-1/2 animate-pulse cursor-pointer"
          pathClassName={cn(
            'fill-primary',
            activeTab !== 'all' && 'fill-background'
          )}
          strokeWidth={7}
          onClick={() => setActiveTab('all')}
        />

        {scope === 'Team' && (
          <div
            className={cn(
              'transition-color mx-auto -mb-24 flex size-44 interactive cursor-pointer items-center justify-center rounded-full border-2 border-primary hover:bg-primary hover:text-primary-foreground',
              activeTab === 'ux' && 'bg-primary text-primary-foreground'
            )}
            onClick={() => setActiveTab('ux')}
          >
            Marketing
          </div>
        )}

        <div
          className={cn(
            'transition-color mx-auto -mb-24 flex size-44 interactive cursor-pointer items-center justify-center rounded-full border-2 border-primary hover:bg-primary hover:text-primary-foreground',
            activeTab === 'ux' && 'bg-primary text-primary-foreground'
          )}
          onClick={() => setActiveTab('ux')}
        >
          UX
        </div>

        <div className="relative my-8 flex items-center justify-center">
          <div
            className={cn(
              'transition-color -mr-4 flex size-44 interactive cursor-pointer items-center justify-center rounded-full border-2 border-primary hover:bg-primary hover:text-primary-foreground',
              activeTab === 'design' && 'bg-primary text-primary-foreground'
            )}
            onClick={() => setActiveTab('design')}
          >
            Design
          </div>

          <div
            className={cn(
              'transition-color -ml-4 flex size-44 interactive cursor-pointer items-center justify-center rounded-full border-2 border-primary hover:bg-primary hover:text-primary-foreground',
              activeTab === 'code' && 'bg-primary text-primary-foreground'
            )}
            onClick={() => setActiveTab('code')}
          >
            Code
          </div>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="all">
            {scope === 'Design Engineering' ? 'Great UI' : 'Still Great UI'}
          </TabsTrigger>
          <TabsTrigger value="design">Design fields</TabsTrigger>
          <TabsTrigger value="code">Code fields</TabsTrigger>
          <TabsTrigger value="ux">UX fields</TabsTrigger>
        </TabsList>
        <TabsContent value="all">
          <p>This is were magic happens, the essence of the output</p>

          <p>The flower of interface engineering</p>

          <div>
            <b>Token System</b>
            <p>
              Tokens systems define key-value pairs of properties to style
              themeable user interfaces: changing colors, font- and typography
              styles, layout, spacing and whitespace ratios.
            </p>
            <p>
              The great thing with tokens is they are exchangeable in their
              values, but are consistent in their naming schemes, making it easy
              to swap out a user interface style to another branding style
              guide.
            </p>
            <div className="grid grid-cols-5 items-center">
              <div className="h-32">
                <div className="bg-['oklch(0.634 0.237 31.3)'] size-11 rounded-2xl" />
                <small>Raw value</small>
                <Markup className="">oklch(0.634 0.237 31.3)</Markup>
              </div>
              <div className="flex items-center justify-center">
                <ArrowRight />
              </div>
              <div className="h-32">
                <div className="size-11 rounded-2xl bg-primary" />
                <small>Variable token</small>
                <Markup>var(--orange)</Markup>
              </div>
              <div className="flex items-center justify-center">
                <ArrowRight />
              </div>
              <div className="h-32">
                <div className="size-11 rounded-2xl bg-primary" />
                <small>Semantic token</small>
                <Markup>.bg-primary</Markup>
              </div>
            </div>
          </div>

          <div className="mx-auto my-6 text-center text-primary">
            <ArrowDown className="mx-auto size-24" />
            Design systems consume token systems
          </div>

          <div>
            <b>Design System</b>
            <p>
              Design systems hold all aspects about how a user interface works
              and is approached. There is no <i>fixed scheme</i>, it is
              completely up to the design and development team to define how
              this design system looks like.
            </p>
            <p>
              There are many great examples out there, such as Google's Material
              Design, Apple's Human Interface Guidelines, and Microsoft's Fluent
              Design System.
            </p>
          </div>

          <span className="text-7xl font-bold text-primary">{'}'}</span>

          <Ul headline="Design System" listStyle="disc">
            <li>Colors</li>
            <li>Typography</li>
            <li>Iconography</li>
            <li>
              Motion
              <ul className="list-disc text-muted-foreground [&>li]:text-muted-foreground">
                <li>Animations</li>
                <li>Transitions</li>
                <li>Interactions</li>
              </ul>
            </li>
            <li>Spacing</li>
            <li>Border</li>
            <li>Architecture approach</li>
            <li>Principles</li>
            <li>Pattern definition</li>
            <li>Guidelines and onboarding documents</li>
            <li>(Component System) – can be included or separated</li>
          </Ul>

          <div className="mx-auto my-6 max-w-[24rem] text-center text-primary">
            <ArrowDown className="mx-auto size-24" />
            Component systems found on the design and token systems for
            themeability
          </div>

          <Ul headline="Component System" listStyle="disc">
            <li>UI libraries</li>
            <li>Import and go</li>
          </Ul>
        </TabsContent>
        <TabsContent value="design">
          <Ul listStyle="disc">
            <li>Concept</li>
            <li>Color</li>
            <li>Layout</li>
            <li>Research</li>
            <li>Typography</li>
            <li>Iconography</li>
            <li>Animations</li>
            <li>Transitions</li>
            <li>Interactions</li>
            <li>Prototyping</li>
            <li>Architecture</li>
            <li>Spacing</li>
            <li>Whitespace</li>
            <li>Accessibility</li>
            <li>Documentation</li>
          </Ul>
        </TabsContent>
        <TabsContent value="code">
          <Ul listStyle="disc">
            <li>Performance</li>
            <li>Function</li>
            <li>Readability</li>
            <li>Cleanliness</li>
            <li>Typography</li>
            <li>Iconography</li>
            <li>Motion</li>
            <ul>
              <li>Animations</li>
              <li>Transitions</li>
              <li>Interactions</li>
            </ul>
            <li>Prototyping</li>
            <li>Architecture</li>
            <li>Design System</li>
            <li>Component System</li>
            <li>Token System</li>
            <li>Accessibility</li>
            <li>Documentation</li>
          </Ul>
        </TabsContent>
        <TabsContent value="ux">
          <Ul listStyle="disc">
            <li>Who am i designing for</li>
            <li>Who am i talking to</li>
            <li>What is the context i am designing in</li>
            <li>Which business factors are involved in the task</li>
            <li>What are the user needs</li>
            <li>Which problem am i solving</li>
            <li>Tone of voice</li>
            <li>User flows</li>
            <li>Storytelling</li>
            <li>Psychology</li>
            <li>Providing satisfaction</li>
            <li>Guiding awareness</li>
            <li>Guiding navigation paths</li>
            <li>Ease of use</li>
            <li>Think before solutionize</li>
            <li>Never get stuck</li>
            <li>Enjoyable, delightful interactions</li>
            <li>Feel design</li>
            <li>Accessibility</li>
          </Ul>
        </TabsContent>
      </Tabs>
    </div>
  );
}
