import { ArrowRightIcon } from '@heroicons/react/16/solid';

import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';

import { RESUME_PDF_HREF } from '@/components/feature/footer';
import {
  ButtonCertificate,
  ButtonFigma,
  ButtonGithub,
  ButtonLinkedin
} from '@/components/feature/profile-links';

export function PageNavigationBar() {
  return (
    <Container className="flex flex-wrap items-center gap-3">
      <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row">
        <Button href="/selected-works" className="whitespace-nowrap">
          Selected works
          <ArrowRightIcon />
        </Button>
        <Button
          href={RESUME_PDF_HREF}
          variant="ghost-foreground"
          className="whitespace-nowrap"
        >
          Resume
        </Button>
      </div>

      <div className="flex w-full justify-center sm:ml-auto sm:w-auto">
        <ButtonFigma id="header-figma" />
        <ButtonGithub id="header-github" />
        <ButtonLinkedin id="header-linkedin" />
        <ButtonCertificate name="Atomic Design" id="header-atomic-design" />
        <ButtonCertificate name="Subatomic" id="header-subatomic" />
      </div>
    </Container>
  );
}
