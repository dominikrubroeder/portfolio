import Link from 'next/link';

import { ArrowRightIcon, ArrowUturnLeftIcon } from '@heroicons/react/16/solid';

import { cn } from '@/lib/utils';

import { Badge } from '@/components/atoms/badge';
import { Button } from '@/components/atoms/button';
import { CodeBlock } from '@/components/atoms/codeblock';
import { Container } from '@/components/atoms/container';
import { DesignTokenIcon } from '@/components/atoms/svg/design-token-icon';
import { components } from '@/components/organisms/component-showcase';

export function ComponentShowcase() {
  return (
    <Container as="section" className="relative">
      <div className="absolute top-4.5 bottom-4.5 -left-[1.7325rem] block h-full w-[2px] bg-primary/10" />

      <div className="space-y-1">
        <div className="relative flex items-center gap-4">
          <DesignTokenIcon className="absolute top-1/2 -left-8 -translate-y-1/2" />
          <h2>Design Tokens</h2>
        </div>

        <p>
          Design tokens are the smallest pieces of the design system. Try to
          think about your closet for a second. Design Tokens are like
          <i> red</i> Socks, <i>blue</i> Socks, or <i>white</i> Socks – your
          <i> long</i> trousers and <i>short</i> swimming trunks. They are
          properties, defining the actual tokens (variables) themselves, which
          are getting consumed by the rest of the group elements: Atoms,
          Molecules, Organisms, Templates and Pages. They define the overall
          style and the visual appearance of the elements.
        </p>
      </div>

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
        borderless
      />

      <ul className="space-y-16">
        {components.map((componentGroup) => (
          <li
            key={componentGroup.groupName}
            className="mx-auto max-w-(--readable-container) space-y-5"
          >
            <div className="space-y-1">
              <div className="relative flex items-center justify-between gap-4">
                <div>
                  <div className="absolute top-1/2 -left-12 -translate-y-1/2">
                    {componentGroup.groupIcon}
                  </div>
                  <h2>{componentGroup.groupName}</h2>
                </div>
                <div className="flex items-center gap-2">
                  <span>Currently</span>
                  <Badge>{componentGroup.children.length}</Badge>
                </div>
              </div>

              <p>{componentGroup.groupDescription}</p>
            </div>

            <ul
              className={cn(
                componentGroup.layoutOption === 'rows' && 'space-y-2',
                componentGroup.layoutOption !== 'rows' &&
                  'grid gap-x-4 gap-y-2',
                componentGroup.layoutOption === '2-cols' && 'md:grid-cols-2',
                componentGroup.layoutOption === '3-cols' &&
                  'sm:grid-cols-2 md:grid-cols-3'
              )}
            >
              {componentGroup.children.map((component, index) => (
                <li key={index}>
                  <div className="group relative space-y-2 overflow-hidden">
                    {component.animatable && (
                      <Button
                        variant="ghost"
                        className="invisible absolute top-4 right-4 translate-y-4 opacity-0 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100"
                      >
                        <span className="sr-only">Reanimate</span>
                        <ArrowUturnLeftIcon />
                      </Button>
                    )}

                    <div className="flex h-[14rem] items-center justify-center overflow-hidden overflow-y-auto rounded border p-4">
                      {component.component}
                    </div>

                    <Link
                      href={`/frontend-vision-ui/${component.componentName.toLowerCase().replaceAll(' ', '-')}`}
                      className="group flex items-center justify-between gap-4"
                    >
                      <h3 className="mb-0">{component.componentName}</h3>
                      <div className="invisible translate-y-4 opacity-0 transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                        <span className="sr-only">
                          Go to $
                          {component.componentName
                            .toLowerCase()
                            .replaceAll(' ', '-')}{' '}
                          component showcase
                        </span>
                        <ArrowRightIcon className="size-4" />
                      </div>
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </Container>
  );
}
