import React from 'react';

import { cn } from '@/lib/utils';
import { Ul } from '@/components/organisms/typography';
import { BrandLink } from '@/components/organisms/brand';
import { getTechnologies } from '@/components/organisms/technologies';
import { getTools } from '@/components/organisms/tools';

const tools = getTools({ names: ['Figma', 'Craft'] });
const technologies = getTechnologies({
  names: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Motion']
});

export function IntroductionTechStack({ className }: { className?: string }) {
  return (
    <Ul
      className={cn(
        '-ml-2 flex list-none flex-wrap items-center gap-4 gap-y-8',
        className
      )}
    >
      {tools.map((item, index) => (
        <li
          key={`introduction-tech-stack-tool-item-${item.name}-${index}`}
          className="flex items-center gap-3"
        >
          <BrandLink
            key={`introduction-tech-stack-tool-${item.name}-${index}`}
            brandLogoId={`introduction-tech-stack-tool-${item.name}-${index}`}
            brand={item}
            showLabel
            labelPosition="bottom"
          />
        </li>
      ))}

      {technologies.map((item, index) => (
        <li
          key={`introduction-tech-stack-technology-item-${item.name}-${index}`}
        >
          <BrandLink
            key={`introduction-tech-stack-technology-${item.name}-${index}`}
            brandLogoId={`introduction-tech-stack-technology-${item.name}-${index}`}
            brand={item}
            showLabel
            labelPosition="bottom"
          />
        </li>
      ))}
    </Ul>
  );
}
