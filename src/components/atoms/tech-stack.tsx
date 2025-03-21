import Button from '@/components/atoms/button';
import React from 'react';
import { cn } from '@/lib/utils';
import {
  MotionLogo,
  NextjsLogo,
  ReactLogo,
  TailwindCssLogo,
  TypescriptLogo
} from '@/components/atoms/logo';

export const techStack = [
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
    icon: <TypescriptLogo />,
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

export default function TechStack({ className }: { className?: string }) {
  return (
    <ul
      className={cn(
        'mx-auto flex w-full max-w-(--breakpoint-sm) flex-wrap items-center gap-6',
        className
      )}
    >
      {techStack.map((item) => (
        <li key={item.title}>
          <Button
            variant="secondary"
            href={item.href}
            className="[&>svg]:size-14"
            target="_blank"
            asLink
            ariaLabel={item.ariaLabel}
            title={item.title}
          >
            {item.icon}
          </Button>
        </li>
      ))}
    </ul>
  );
}
