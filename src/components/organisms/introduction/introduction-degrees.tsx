import { CheckBadgeIcon } from '@heroicons/react/24/outline';
import { Button } from '@/components/atoms/button';
import { ArrowUpRightIcon } from '@heroicons/react/20/solid';

export function IntroductionDegrees() {
  return (
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
  );
}
