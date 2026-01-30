import { CheckCircleIcon } from '@heroicons/react/24/solid';

import { IconTemplate } from '@/components/atoms/icon/icon-template';

export function IconPage() {
  return (
    <div className="group relative">
      <CheckCircleIcon className="absolute -top-1 -right-1 z-10 size-4 rounded-full bg-background fill-primary group-hover:animate-badge-up" />
      <IconTemplate />
    </div>
  );
}
