'use client';

import { usePathname } from 'next/navigation';

import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/16/solid';

import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';

import {
  ButtonFigma,
  ButtonGithub,
  ButtonLinkedin
} from '@/components/feature/profile-links';

const NAVIGATION_BAR_INTRODUCTION_BACK_PATHNAME = '/selected-works';

export function PageNavigationBar() {
  const pathname = usePathname();
  const showIntroduction =
    pathname === NAVIGATION_BAR_INTRODUCTION_BACK_PATHNAME;

  return (
    <div className="sticky bottom-0 z-200 mt-4 bg-background py-4">
      <Container className="flex items-center gap-3 px-4">
        <div className="relative grid flex-1 justify-items-start sm:flex-none">
          {showIntroduction ? (
            <Button href="/" className="w-full sm:w-auto">
              <ArrowLeftIcon />
              Introduction
            </Button>
          ) : (
            <Button href="/selected-works" className="w-full sm:w-auto">
              Selected works
              <ArrowRightIcon />
            </Button>
          )}
        </div>

        <div className="ml-auto flex">
          <ButtonFigma id="header-figma" className="max-xs:hidden" />
          <ButtonGithub id="header-github" />
          <ButtonLinkedin id="header-linkedin" />
        </div>
      </Container>
    </div>
  );
}
