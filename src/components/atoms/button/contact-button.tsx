import { EnvelopeIcon } from '@heroicons/react/24/outline';

import { cn } from '@/lib/utils';

import type { ButtonProps } from '@/components/atoms/button';
import { Button } from '@/components/atoms/button';

export function ContactButton({
  buttonProps,
  withLabel,
  iconPosition = 'left'
}: {
  buttonProps?: Omit<ButtonProps, 'children'>;
  withLabel?: boolean;
  iconPosition?: 'left' | 'right';
}) {
  return (
    <Button
      href="mailto:dominik.rubroeder@icloud.com?subject=I want to write you about..."
      variant="ghost"
      {...buttonProps}
    >
      {iconPosition === 'left' && <EnvelopeIcon className="size-5" />}

      <span className={cn(withLabel ? '' : 'sr-only')}>Contact</span>

      {iconPosition === 'right' && <EnvelopeIcon className="size-5" />}
    </Button>
  );
}
