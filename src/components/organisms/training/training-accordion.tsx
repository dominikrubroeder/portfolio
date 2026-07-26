import { CheckBadgeIcon } from '@heroicons/react/24/outline';
import { Button } from '@/components/atoms/button';
import { ButtonGroup } from '@/components/molecules/button-group';

export function TrainingAccordion() {
  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <small className="block uppercase">Training</small>

        <div className="space-y-3 sm:flex sm:items-center sm:gap-4 sm:space-y-0">
          <div className="flex gap-4 md:items-center">
            <CheckBadgeIcon className="mt-1 size-6! text-primary" />

            <div className="space-x-1.5">
              <b className="text-foreground">Media Designer</b>
              <span className="text-muted-foreground">
                – Trainee as Media Designer in Design and Technology, back in
                2016
              </span>
            </div>
          </div>

          <Button
            href="https://web.arbeitsagentur.de/berufenet/beruf/137682"
            title="View description of training in media design"
            aria-label="View description of training in media design"
            className="ml-10 sm:ml-0"
          >
            View description
          </Button>
        </div>
      </div>

      <div className="space-y-3">
        <small className="block uppercase">Degrees</small>

        <div className="space-y-3 sm:flex sm:items-center sm:gap-4 sm:space-y-0">
          <div className="flex gap-4 md:items-center">
            <CheckBadgeIcon className="mt-1 size-6! text-primary" />

            <div className="space-x-1.5">
              <b className="text-foreground">Media Design B.A.</b>
              <span className="text-muted-foreground">
                – Dual study at the IU International University in Munich,
                graduating in 2023
              </span>
            </div>
          </div>

          <Button
            href="https://www.iu.de/en/bachelor/mediendesign/"
            title="View description of study in media design"
            aria-label="View description of study in media design"
            className="ml-10 sm:ml-0"
          >
            View description
          </Button>
        </div>
      </div>

      <div className="space-y-3">
        <small className="block uppercase">Certifications</small>

        <div className="space-y-3 sm:flex sm:items-center sm:gap-4 sm:space-y-0">
          <div className="flex gap-4 md:items-center">
            <CheckBadgeIcon className="size-6! text-primary" />
            <div className="space-x-1.5">
              <b className="text-foreground">
                Atomic Design Certification Course
              </b>
              <span className="font-normal text-muted-foreground">
                by Brad Frost – Certificate of completion in 2026
              </span>
            </div>
          </div>

          <ButtonGroup className="ml-10 flex-nowrap sm:ml-0">
            <Button
              href="/certificates/Atomic-Design-Certificate-Dominik-Rubröder.pdf"
              title="View my certificate in Atomic Design by Brad Frost"
              aria-label="View my certificate in Atomic Design by Brad Frost"
              className="sm:order-2 sm:flex-auto"
            >
              <span className="w-max">View certificate</span>
            </Button>
            <Button
              variant="contained-muted"
              href="https://atomicdesigncourse.com"
              title="View Atomic Design Course website by Brad Frost"
              aria-label="View Atomic Design Course website by Brad Frost"
              className="sm:order-1 sm:flex-auto"
            >
              <span className="w-max">View course</span>
            </Button>
          </ButtonGroup>
        </div>

        <div className="space-y-3 sm:flex sm:items-center sm:gap-4 sm:space-y-0">
          <div className="flex gap-4 md:items-center">
            <CheckBadgeIcon className="size-6! text-primary" />
            <div className="space-x-1.5">
              <b className="text-foreground">
                Subatomic: The Complete Guide To Design Tokens
              </b>
              <span className="font-normal text-muted-foreground">
                by Brad and Ian Frost – Certificate of completion in 2025
              </span>
            </div>
          </div>

          <ButtonGroup className="ml-10 flex-nowrap sm:ml-0">
            <Button
              href="/certificates/subatomic-brad-ian-frost-dominik-rubröder-2025-11-25-certificate.pdf"
              title="View my certificate in Subatomic The Complete Guide to Design Tokens by Brad and Ian Frost"
              aria-label="View my certificate in Subatomic The Complete Guide to Design Tokens by Brad and Ian Frost"
              className="sm:order-2 sm:flex-auto"
            >
              <span className="w-max">View certificate</span>
            </Button>
            <Button
              variant="contained-muted"
              href="https://designtokenscourse.com"
              title="View Subatomic Course website by Brad and Ian Frost"
              aria-label="View Subatomic Course website by Brad and Ian Frost"
              className="sm:order-1 sm:flex-auto"
            >
              <span className="w-max">View course</span>
            </Button>
          </ButtonGroup>
        </div>
      </div>
    </div>
  );
}
