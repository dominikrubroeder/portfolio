'use client';

import { usePathname } from 'next/navigation';

import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/16/solid';

import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';

import {
  ButtonGithub,
  ButtonLinkedin
} from '@/components/feature/profile-links';

const NAVIGATION_BAR_HOME_BACK_PATHNAME = '/projects';

export function PageNavigationBar() {
  const pathname = usePathname();
  const showHome = pathname === NAVIGATION_BAR_HOME_BACK_PATHNAME;

  return (
    <div className="sticky bottom-0 z-200 mt-8 bg-background py-4">
      <Container className="flex items-center gap-3 px-4">
        <div className="relative grid flex-1 justify-items-start sm:flex-none">
          {showHome ? (
            <Button href="/" className="w-full sm:w-auto">
              <ArrowLeftIcon />
              Home
            </Button>
          ) : (
            <Button href="/projects" className="w-full sm:w-auto">
              Selected work
              <ArrowRightIcon />
            </Button>
          )}
        </div>

        <div className="ml-auto flex">
          <ButtonGithub id="header-github" />
          <ButtonLinkedin id="header-linkedin" />
        </div>
      </Container>
    </div>
  );
}
