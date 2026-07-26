import { Button } from '@/components/atoms/button';
import { Blockquote } from '@/components/atoms/blockquote';
import { BrandLink, BrandName } from '@/components/organisms/brand';
import { Badge } from '@/components/atoms/badge';
import {
  ThemeColorSetting,
  ThemeSidebarTrigger
} from '@/components/organisms/theme';
import { ExternalLink } from '@/components/atoms/external-link';
import { AnimatedProgress } from '@/components/atoms/animated-progress';
import { Accordion } from '@/components/molecules/accordion';
import { Mission, Vision, Why } from '@/components/organisms/foundation';
import { IntroductionTechStack } from '@/components/organisms/introduction';
import { Container } from '@/components/organisms/layout';
import { getTools } from '@/components/organisms/tools';
import { Marker } from '@/components/atoms/marker';
import { PageTemplate } from '@/components/templates/page-template';
import { redirect } from 'next/navigation';

export default function ShowcasePage() {
  redirect('/');

  const figmaBrand = getTools({ names: ['Figma'] })?.[0];

  return (
    <PageTemplate
      h1="Showcase"
      heroBlockquote="Here are all components listed of this website. Storybook link ..."
      heroNavigationHiddenLink="/showcase"
    >
      <Container
        size="container-readable"
        className="animate-in-to-left-160 space-y-5 rounded border p-6 py-7"
      >
        <div className="flex flex-wrap items-center gap-5">
          <Button>Hello, world</Button>
          <Blockquote className="m-0">Hello, world</Blockquote>
          <BrandLink size="small" brandLogoId="Figma" brand={figmaBrand} />
          <Badge className="self-center">New</Badge>
          <ThemeColorSetting />
          <ThemeSidebarTrigger
            buttonProps={{ variant: 'ghost-foreground' }}
            showThemeValue={false}
          />
          <BrandName
            brandName="TypeScript"
            label={
              <ExternalLink href="https://www.typescriptlang.org">
                TypeScript
              </ExternalLink>
            }
            className="mr-0.5"
          />
          <AnimatedProgress progress={90} size={32} strokeWidth={5} />
          <Marker animate>Hello, world</Marker>
          <Marker variant="green">Hello, world</Marker>
          <Marker variant="yellow">Hello, world</Marker>
          <Marker variant="red">Hello, world</Marker>
          <Marker variant="purple">Hello, world</Marker>
        </div>

        <div>
          <Accordion
            variant="contained"
            items={[
              {
                title: 'Vision: About Design Systems',
                children: <Vision />
              },
              {
                title: 'Mission',
                children: <Mission />
              },
              {
                title: 'Why',
                children: <Why />
              },
              {
                title: 'Architecture',
                children: <Why />
              },
              {
                title: 'My Tech Stack of Choice',
                children: <IntroductionTechStack />
              }
            ]}
            accordionGroupId="accordion-group-introduction"
            focusView="start"
          />
        </div>
      </Container>
    </PageTemplate>
  );
}
