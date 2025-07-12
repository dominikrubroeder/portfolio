import Link from 'next/link';

import { ArrowRightIcon, ArrowUturnLeftIcon } from '@heroicons/react/16/solid';

import { cn } from '@/lib/utils';

import { Button } from '@/components/atoms/button';
import { Container } from '@/components/atoms/container';
import { components } from '@/components/organisms/component-showcase';

export function ComponentShowcase() {
  return (
    <Container as="section">
      <ul className="space-y-16">
        {components.map((componentGroup) => (
          <li
            key={componentGroup.groupName}
            className="mx-auto max-w-(--readable-container) space-y-5"
          >
            <div className="space-y-1">
              <h2>{componentGroup.groupName}</h2>
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
                  <div className="group relative space-y-2">
                    {component.animatable && (
                      <Button
                        variant="ghost"
                        className="invisible absolute top-4 right-4 translate-y-4 opacity-0 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100"
                      >
                        <span className="sr-only">Reanimate</span>
                        <ArrowUturnLeftIcon />
                      </Button>
                    )}

                    <div className="flex min-h-[14rem] items-center justify-center overflow-hidden overflow-y-auto rounded border p-4">
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
