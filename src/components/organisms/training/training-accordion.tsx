import { IntroductionDegreesList } from '@/components/organisms/introduction';
import { BooksList } from '@/components/organisms/training/books';
import { AllResources } from '@/components/organisms/training/all-resources';
import { CheckBadgeIcon } from '@heroicons/react/24/outline';
import { Ul } from '@/components/atoms/ul';

export function TrainingAccordion() {
  return (
    <>
      <IntroductionDegreesList />

      <Ul headline="Certifications">
        <li>
          <div className="flex gap-4 md:items-center">
            <CheckBadgeIcon className="size-6 text-primary" />

            <div className="space-x-1">
              <b className="text-foreground">
                Subatomic: The Complete Guide To Design Tokens
              </b>
              <span>– Certificate of completion in 2025</span>
            </div>
          </div>
        </li>
      </Ul>

      <BooksList />

      <AllResources />
    </>
  );
}
