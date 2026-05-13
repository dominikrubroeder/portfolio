import { Container } from '../../components/organisms/layout/container';
import { mainTools, tools } from '@/components/organisms/tools';
import { BrandList, BrandRow } from '@/components/organisms/brand';
import { Hr } from '@/components/atoms/hr';
import { Ul } from '@/components/atoms/ul';
import type { Metadata } from 'next';
import { Blockquote } from '@/components/atoms/blockquote';

export const metadata: Metadata = {
  title: 'Tools | Dominik Rubröder, UX Design Engineer',
  description: 'Get things done and into the world with the right tools.'
};

export default function ToolsPage() {
  return (
    <>
      <div className="animate-to-left [animation-delay:100ms]">
        <Container as="section" size="container-readable">
          <h1>Tools</h1>
          <Blockquote className="mt-3 sm:mt-5">
            Tools help get our ideas into the world, visualize them, save them
            and refine them. They organize, optimize, analyse and help us get
            things done.
          </Blockquote>
        </Container>
      </div>

      <div className="animate-to-left [animation-delay:160ms]">
        <Container as="section" size="container-readable">
          <h2>My main daily drivers</h2>
          <div>
            <BrandList brands={mainTools} />
          </div>
        </Container>
      </div>

      <div className="animate-to-left [animation-delay:240ms]">
        <Container as="section" size="container-readable">
          <h2>Extended list, all tools</h2>
          <Ul className="grid gap-6 sm:gap-10">
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
      </div>

      <Hr variant="container" />
    </>
  );
}
