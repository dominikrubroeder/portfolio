import { EllipsisVerticalIcon } from '@heroicons/react/20/solid';
import { CheckBadgeIcon } from '@heroicons/react/24/outline';

import { Button } from '@/components/atoms/button';
import { Select } from '@/components/atoms/select';
import { Ul } from '@/components/atoms/ul';

export function IntroductionDegreesList() {
  return (
    <Ul headline="Degrees">
      <li>
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <CheckBadgeIcon className="size-6 text-primary" />
            <span>
              <b className="text-foreground">Bachelor of Arts</b> – Media Design
              B.A, Dual study at IU university in Munich
            </span>
          </div>

          <Select
            trigger={
              <Button variant="ghost" className="-mr-3">
                <span className="sr-only">Open actions</span>
                <EllipsisVerticalIcon className="size-5" />
              </Button>
            }
            options={[{ label: 'Download CV', value: 'download-cv' }]}
          ></Select>
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
