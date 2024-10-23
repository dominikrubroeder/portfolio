import Button from '@/components/atoms/button';
import ReactIcon from '@/components/ui/svg/react-icon';
import NextJsIcon from '@/components/ui/svg/next-js-icon';
import TypescriptIcon from '@/components/ui/svg/typescript-icon';
import TailwindCssIcon from '@/components/ui/svg/tailwind-css-icon';
import FramerMotionIcon from '@/components/ui/svg/framer-motion-icon';
import React from 'react';
import { cn } from '@/lib/utils';

export default function TechStack({ className }: { className?: string }) {
  return (
    <div className={cn('mx-auto w-full max-w-screen-sm space-y-6', className)}>
      <h3>My tech stack</h3>
      <ul className="flex flex-wrap items-center gap-4">
        <li>
          <Button
            variant="secondary"
            href="https://react.dev"
            target="_blank"
            asLink
          >
            <ReactIcon />
          </Button>
        </li>

        <li>
          <Button
            variant="secondary"
            href="https://nextjs.org"
            target="_blank"
            asLink
          >
            <NextJsIcon />
          </Button>
        </li>

        <li>
          <Button
            variant="secondary"
            href="https://www.typescriptlang.org"
            target="_blank"
            asLink
          >
            <TypescriptIcon />
          </Button>
        </li>

        <li>
          <Button
            variant="secondary"
            href="https://www.tailwindcss.com"
            target="_blank"
            asLink
          >
            <TailwindCssIcon />
          </Button>
        </li>

        <li>
          <Button
            variant="secondary"
            href="https://www.framer.com/motion/"
            target="_blank"
            asLink
          >
            <FramerMotionIcon />
          </Button>
        </li>
      </ul>
    </div>
  );
}
