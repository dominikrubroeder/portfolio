import { CheckCircleIcon } from '@heroicons/react/24/solid';

import { TemplateIcon } from '@/components/atoms/svg/template-icon';

export function PageIcon() {
  return (
    <div className="group relative">
      <CheckCircleIcon className="absolute -top-1 -right-1 z-10 size-4 rounded-full bg-background fill-primary group-hover:animate-badge-up" />
      <TemplateIcon />
    </div>
  );
}
