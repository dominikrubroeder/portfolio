import { IntroductionDegreesList } from '@/components/organisms/introduction';
import { BooksList } from '@/components/organisms/training/books';
import { AllResources } from '@/components/organisms/training/all-resources';
import { CheckBadgeIcon } from '@heroicons/react/24/outline';
import { Ul } from '@/components/atoms/ul';
import { Button } from '@/components/atoms/button';
import { ArrowUpRightIcon } from '@heroicons/react/20/solid';

export function TrainingAccordion() {
  return (
    <>
      <IntroductionDegreesList />

      <Ul headline="Certifications">
        <li>
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
                <span className="text-muted-foreground">
                  – Certificate of completion in 2025
                </span>
              </span>
            </span>

            <ArrowUpRightIcon className="mr-4 size-5 text-current" />
          </Button>
        </li>
      </Ul>

      <BooksList />

      <AllResources />
    </>
  );
}
