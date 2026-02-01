import { CheckBadgeIcon } from '@heroicons/react/24/outline';

import { Ul } from '@/components/atoms/ul';

export function IntroductionDegreesList() {
  return (
    <Ul headline="Degrees">
      <li>
        <div className="flex gap-4 md:items-center">
          <CheckBadgeIcon className="size-6 text-primary" />

          <div>
            <b className="text-foreground">Bachelor of Arts</b> – Media Design
            B.A, Dual study at IU university in Munich graduating in 2023
          </div>
        </div>
      </li>

      <li>
        <div className="flex gap-4 md:items-center">
          <CheckBadgeIcon className="size-6 text-primary" />

          <div>
            <b className="text-foreground">Trainee</b> as a media designer in
            design and technology back in 2016
          </div>
        </div>
      </li>
    </Ul>
  );
}
