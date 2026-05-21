import { EnvelopeIcon } from '@heroicons/react/24/outline';
import { Button } from '@/components/atoms/button';

export function ContactButton() {
  return (
    <Button href="mailto:dominik.rubroeder@icloud.com?subject=I want to write you about...">
      <EnvelopeIcon className="size-6" />
      Get in touch
    </Button>
  );
}
