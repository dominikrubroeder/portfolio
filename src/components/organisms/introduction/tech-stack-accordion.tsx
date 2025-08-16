import React from 'react';

import { cn } from '@/lib/utils';

import { Accordion } from '@/components/atoms/accordion';
import { Ul } from '@/components/atoms/ul';
import { BrandLink } from '@/components/organisms/brand';
import { getTechnologies } from '@/components/organisms/technologies';

export const techStackAccordion = [
  ...getTechnologies({
    technologyNames: [
      'React',
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Motion'
    ]
  })
];

export function TechStackAccordion({ className }: { className?: string }) {
  return (
    <Accordion title="My Tech Stack">
      <Ul className={cn('flex list-none flex-wrap gap-2', className)}>
        {techStackAccordion.map((technology) => (
          <li key={technology.name}>
            <BrandLink brand={technology} />
          </li>
        ))}
      </Ul>
    </Accordion>
  );
}
