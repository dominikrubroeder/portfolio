import { Button } from '@/components/atoms/button';
import React from 'react';
import { cn } from '@/lib/utils';
import {
  MotionLogo,
  NextjsLogo,
  ReactLogo,
  TailwindCssLogo,
  TypeScriptLogo
} from '@/components/atoms/logo';
import { Ul } from '@/components/atoms/ul';
import { Accordion } from '@/components/atoms/accordion';

export const techStackAccordion = [
  {
    href: 'https://react.dev',
    icon: <ReactLogo />,
    title: 'Open React landingpage',
    ariaLabel: 'Open React landingpage'
  },
  {
    href: 'https://nextjs.org',
    icon: <NextjsLogo />,
    title: 'Open Next.js landingpage',
    ariaLabel: 'Open Next.js landingpage'
  },
  {
    href: 'https://www.typescriptlang.org',
    icon: <TypeScriptLogo />,
    title: 'Open TypeScript landingpage',
    ariaLabel: 'Open TypeScript landingpage'
  },
  {
    href: 'https://www.tailwindcss.com',
    icon: <TailwindCssLogo />,
    title: 'Open Tailwind CSS landingpage',
    ariaLabel: 'Open Tailwind CSS landingpage'
  },
  {
    href: 'https://motion.dev',
    icon: <MotionLogo />,
    title: 'Open motion landingpage',
    ariaLabel: 'Open motion landingpage'
  }
];

export function TechStackAccordion({ className }: { className?: string }) {
  return (
    <Accordion title="My Tech Stack">
      <Ul
        className={cn('flex list-none flex-wrap items-center gap-6', className)}
      >
        {techStackAccordion.map((item) => (
          <li key={item.title}>
            <Button
              variant="ghost"
              href={item.href}
              className="py-3 [&>svg]:size-12"
              target="_blank"
              aria-label={item.ariaLabel}
              title={item.title}
            >
              {item.icon}
            </Button>
          </li>
        ))}
      </Ul>
    </Accordion>
  );
}
