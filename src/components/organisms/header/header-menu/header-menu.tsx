import { GitHubButton, LinkedInButton } from '@/components/atoms/button';
import { ButtonGroup } from '@/components/molecules/button-group';
import { HeaderMenuTrigger } from '@/components/organisms/header';
import { Suspense } from 'react';

export function HeaderMenu() {
  return (
    <ButtonGroup minimizeSpacing className="lg:hidden">
      <LinkedInButton />
      <GitHubButton />
      <Suspense>
        <HeaderMenuTrigger />
      </Suspense>
    </ButtonGroup>
  );
}
