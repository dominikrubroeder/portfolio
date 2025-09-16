import { EllipsisVerticalIcon } from '@heroicons/react/20/solid';
import { CheckBadgeIcon } from '@heroicons/react/24/outline';

import { Button } from '@/components/atoms/button';
import { Ul } from '@/components/atoms/ul';

export function IntroductionDegreesList() {
  return (
    <Ul headline="Degrees">
      <li>
        <div className="flex items-center gap-2">
          <CheckBadgeIcon className="size-6 text-primary" />
          <span>
            <b className="text-foreground">Bachelor of Arts</b> – Media Design
            B.A, Dual study at IU university in Munich
          </span>
          <Button variant="ghost">
            <span className="sr-only">Open actions</span>
            <EllipsisVerticalIcon className="size-5" />
          </Button>
        </div>
      </li>
      <li>
        <div className="flex items-center gap-2">
          <CheckBadgeIcon className="size-6 text-primary" />
          <span>
            <b className="text-foreground">Trainee</b> as a media designer in
            design and technology
          </span>
        </div>
      </li>
    </Ul>
  );
}
