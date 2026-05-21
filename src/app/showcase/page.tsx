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

export default function ShowcasePage() {
  const figmaBrand = getTools({ names: ['Figma'] })?.[0];

  return (
    <>
      <Container>
        <h1>Showcase</h1>
        <Blockquote>
          Here are all components listed of this website. Storybook link ...
        </Blockquote>
      </Container>

      <Container
        size="container"
        className="mx-4 animate-in-to-top-160 space-y-5 rounded border p-6 py-7"
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
    </>
  );
}
