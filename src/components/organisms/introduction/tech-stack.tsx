import Button from '@/components/atoms/button';
import ReactIcon from '@/components/atoms/svg/react-icon';
import NextJsLogo from '@/components/atoms/svg/next-js-logo';
import TypescriptIcon from '@/components/atoms/svg/typescript-icon';
import TailwindCssIcon from '@/components/atoms/svg/tailwind-css-icon';
import MotionIcon from '@/components/atoms/svg/motion-icon';
import React from 'react';
import { cn } from '@/lib/utils';

export const techStack = [
  {
    href: 'https://react.dev',
    icon: <ReactIcon />,
    title: 'Open React landingpage',
    ariaLabel: 'Open React landingpage'
  },
  {
    href: 'https://nextjs.org',
    icon: <NextJsLogo />,
    title: 'Open Next.js landingpage',
    ariaLabel: 'Open Next.js landingpage'
  },
  {
    href: 'https://www.typescriptlang.org',
    icon: <TypescriptIcon />,
    title: 'Open TypeScript landingpage',
    ariaLabel: 'Open TypeScript landingpage'
  },
  {
    href: 'https://www.tailwindcss.com',
    icon: <TailwindCssIcon />,
    title: 'Open Tailwind CSS landingpage',
    ariaLabel: 'Open Tailwind CSS landingpage'
  },
  {
    href: 'https://motion.dev',
    icon: <MotionIcon />,
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
