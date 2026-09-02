import { Container } from '@/components/organisms/layout';
import { mainTools, tools } from '@/components/organisms/tools';
import { BrandList, BrandRow } from '@/components/organisms/brand';
import { H2, Ul } from '@/components/organisms/typography';
import type { Metadata } from 'next';
import { PageTemplate } from '@/components/templates/page-template';

export const metadata: Metadata = {
  title: 'Tools | Dominik Rubröder, UX Engineer',
  description: 'Get things done and into the world with the right tools.'
};

export default function ToolsPage() {
  return (
    <PageTemplate
      h1="Tools"
      heroBlockquote="Tools bring our ideas into the world, visualize them, save and refine them. They organize, optimize, analyse, share and help us get things done."
      heroNavigationHiddenLink="/tools"
    >
      <Container
        as="section"
        size="container-readable"
        className="animate-in-to-left-160"
      >
        <H2>My main tools</H2>
        <BrandList brands={mainTools} />
      </Container>

      <Container
        as="section"
        size="container-readable"
        className="animate-in-to-left-240"
      >
        <H2>More tools I've worked with</H2>
        <Ul className="grid w-full gap-6 sm:gap-10">
          {tools
            .slice()
            .sort((a, b) => {
              return a.group.localeCompare(b.group);
            })
            .map((item, index) => (
              <li key={`all-tools-${item.group}`}>
                <div className="space-y-3 sm:space-y-4">
                  <div className="relative flex justify-between gap-4">
                    <div className="font-bold">{item.group}</div>
                  </div>

                  <div className="space-y-2">
                    <Ul className="mb-0 space-y-5 rounded border bg-background p-4 sm:space-y-3 sm:p-4">
                      {item.children
                        .slice()
                        .sort((a, b) => a.name.localeCompare(b.name))
                        .map((child) => (
                          <li key={`${item.group}-${child.name}`}>
                            <BrandRow
                              brand={child}
                              index={index}
                              showKnowledgeBar
                            />
                          </li>
                        ))}
                    </Ul>

                    {item.description && (
                      <small className="block">{item.description}</small>
                    )}
                  </div>
                </div>
              </li>
            ))}
        </Ul>
      </Container>

      <Container>
        <small className="block sm:text-center">
          If you can't find a popular package, reach out to clarify my knowledge
          with it.
        </small>
      </Container>
    </PageTemplate>
  );
}
