import React from 'react';

import { cn } from '@/lib/utils';
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
    <Ul
      className={cn(
        '-ml-2 flex list-none flex-wrap items-center gap-4 gap-y-8',
        className
      )}
    >
      {tools.map((item, index) => (
        <li
          key={`list-item-introduction-tech-stack-accordion-tool-item-${index}-${item.name}`}
          className="flex items-center gap-3"
        >
          <BrandLink
            key={`brand-link-introduction-tech-stack-accordion-item-${index}-${item.name}`}
            brand={item}
            showLabel
            labelPosition="bottom"
          />

          {index === 0 && <PlusIcon className="mr-1 block size-6" />}
        </li>
      ))}

      {technologies.map((item, index) => (
        <li
          key={`list-item-introduction-tech-stack-accordion-technology-item-${index}-${item.name}`}
        >
          <BrandLink
            key={`brand-link-introduction-tech-stack-accordion-item-${index}-${item.name}`}
            brand={item}
            showLabel
            labelPosition="bottom"
          />
        </li>
      ))}
    </Ul>
  );
}
