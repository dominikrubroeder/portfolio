import { CheckBadgeIcon } from '@heroicons/react/24/outline';
import { Button } from '@/components/atoms/button';
import { ArrowUpRightIcon } from '@heroicons/react/20/solid';

export function TrainingAccordion() {
  return (
    <div className="space-y-3">
      <div>
        <b>Training</b>
        <Button
          variant="ghost-foreground"
          href="https://www.loy.info"
          className="group -mx-2 flex justify-between gap-3 p-2"
        >
          <span className="flex gap-4 md:items-center">
            <CheckBadgeIcon className="mt-1 size-6! text-primary" />

            <span className="space-x-1.5">
              <b className="text-foreground">Media Designer</b>
              <span className="text-muted-foreground">
                – Trainee as Media Designer in Design and Technology, back in
                2016
              </span>
            </span>
          </span>

          <ArrowUpRightIcon className="mr-4 size-5 text-current" />
        </Button>
      </div>

      <div>
        <b>Degrees</b>
        <Button
          variant="ghost-foreground"
          href="https://www.iu.de/en/bachelor/mediendesign/"
          className="group -mx-2 flex justify-between gap-3 p-2"
        >
          <span className="flex gap-4 md:items-center">
            <CheckBadgeIcon className="mt-1 size-6! text-primary" />

            <span className="space-x-1.5">
              <b className="text-foreground">Media Design B.A.</b>
              <span className="text-muted-foreground">
                – Dual study at the IU International University in Munich,
                graduating in 2023
              </span>
            </span>
          </span>

          <ArrowUpRightIcon className="mr-4 size-5 text-current" />
        </Button>
      </div>

      <div>
        <b>Certifications</b>
        <Button
          variant="ghost-foreground"
          href="/certificates/subatomic-brad-ian-frost-dominik-rubröder-2025-11-25-certificate.pdf"
          className="group -mx-2 flex items-center gap-3 p-2 sm:items-center"
        >
          <span className="flex gap-4 md:items-center">
            <CheckBadgeIcon className="size-6! text-primary" />
            <span className="space-x-1.5">
              <b className="text-foreground">
                Subatomic: The Complete Guide To Design Tokens
              </b>
              <span className="font-normal text-muted-foreground">
                – Certificate of completion in 2025
              </span>
            </span>
          </span>

          <ArrowUpRightIcon className="mr-4 size-5 text-current" />
        </Button>
      </div>
    </div>
  );
}
