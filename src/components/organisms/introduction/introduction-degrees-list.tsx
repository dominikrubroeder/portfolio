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
            B.A, Dual study at IU university in Munich
          </div>
        </div>
      </li>

      <li>
        <div className="flex gap-4 md:items-center">
          <CheckBadgeIcon className="size-6 text-primary" />

          <div>
            <b className="text-foreground">Trainee</b> as a media designer in
            design and technology
          </div>
        </div>
      </li>
    </Ul>
  );
}
