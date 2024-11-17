import Button from '@/components/atoms/button';
import ReactIcon from '@/components/atoms/svg/react-icon';
import NextJsIcon from '@/components/atoms/svg/next-js-icon';
import TypescriptIcon from '@/components/atoms/svg/typescript-icon';
import TailwindCssIcon from '@/components/atoms/svg/tailwind-css-icon';
import FramerMotionIcon from '@/components/atoms/svg/framer-motion-icon';
import React from 'react';
import { cn } from '@/lib/utils';

export default function TechStack({ className }: { className?: string }) {
  return (
    <div>
      <ul
        className={cn(
          'mx-auto flex w-full max-w-screen-sm flex-wrap items-center gap-4',
          className
        )}
      >
        <li>
          <Button
            variant="secondary"
            href="https://react.dev"
            target="_blank"
            asLink
            className="[&>svg]:size-12 [&>svg]:sm:size-8"
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
            className="[&>svg]:size-12 [&>svg]:sm:size-8"
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
            className="[&>svg]:size-12 [&>svg]:sm:size-8"
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
            className="[&>svg]:size-12 [&>svg]:sm:size-8"
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
            className="[&>svg]:size-12 [&>svg]:sm:size-8"
          >
            <FramerMotionIcon />
          </Button>
        </li>
      </ul>
    </div>
  );
}
