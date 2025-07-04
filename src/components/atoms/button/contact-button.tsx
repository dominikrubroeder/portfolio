import { EnvelopeIcon } from '@heroicons/react/24/outline';

import { cn } from '@/lib/utils';

import { Button } from '@/components/atoms/button';

export function ContactButton({ withLabel }: { withLabel?: boolean }) {
  return (
    <Button
      href="mailto:dominik.rubroeder@icloud.com?subject=I want to write you about..."
      variant="ghost"
    >
      <EnvelopeIcon />
      <span className={cn(withLabel ? '' : 'sr-only')}>Contact</span>
    </Button>
  );
}
