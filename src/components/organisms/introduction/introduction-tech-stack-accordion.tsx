import React from 'react';

import { cn } from '@/lib/utils';

import { Accordion } from '@/components/atoms/accordion';
import { Ul } from '@/components/atoms/ul';
import { BrandLink } from '@/components/organisms/brand';
import { getTechnologies } from '@/components/organisms/technologies';
import { getTools } from '@/components/organisms/tools';
import { PlusIcon } from '@heroicons/react/24/outline';

const tools = getTools({ toolNames: ['Figma'] });
const technologies = getTechnologies({
  technologyNames: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Motion']
});

export function IntroductionTechStackAccordion({
  className
}: {
  className?: string;
}) {
  return (
    <Accordion title="My Tech Stack of choice">
      <Ul
        className={cn(
          '-ml-2 flex list-none flex-wrap items-center gap-2 pb-1',
          className
        )}
      >
        {tools.map((item) => (
          <li key={item.name}>
            <BrandLink brand={item} showLabel labelPosition="bottom" />
          </li>
        ))}

        <li>
          <PlusIcon className="mr-2 ml-1 size-6" />
        </li>

        {technologies.map((item) => (
          <li key={item.name}>
            <BrandLink brand={item} showLabel labelPosition="bottom" />
          </li>
        ))}
      </Ul>
    </Accordion>
  );
}
