import { Button } from '@/components/ui/button';

import type { ProjectResponsibility } from './projects-types';

// Plain text, or text with the first occurrence of `link.label` turned into an external link.
export function ProjectResponsibilityText({
  responsibility
}: {
  responsibility: ProjectResponsibility;
}) {
  if (typeof responsibility === 'string') return responsibility;

  const { label, href } = responsibility.link;
  const [before, ...rest] = responsibility.text.split(label);

  return (
    <>
      {before}
      <Button variant="text-primary" href={href}>
        {label}
      </Button>
      {rest.join(label)}
    </>
  );
}
