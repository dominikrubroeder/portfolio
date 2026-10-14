import { EnvelopeIcon } from '@heroicons/react/24/outline';

import { Button } from '@/components/ui/button';
import type { ButtonProps } from '@/components/ui/button';

export function ButtonContact({
  buttonProps,
  withLabel = true,
  iconPosition = 'left'
}: {
  buttonProps?: Omit<ButtonProps, 'children'>;
  withLabel?: boolean;
  iconPosition?: 'left' | 'right';
}) {
  return (
    <Button
      href="mailto:dominik.rubroeder@icloud.com?subject=I want to write you about..."
      variant="contained-primary"
      iconOnly={!withLabel}
      label="Write email to Dominik"
      {...buttonProps}
    >
      {iconPosition === 'left' && <EnvelopeIcon className="size-5" />}

      {withLabel && <span>Contact</span>}

      {iconPosition === 'right' && <EnvelopeIcon className="size-5" />}
    </Button>
  );
}
