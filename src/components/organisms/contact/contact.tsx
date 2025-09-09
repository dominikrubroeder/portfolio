import { EnvelopeIcon } from '@heroicons/react/24/outline';

import { Button } from '@/components/atoms/button';
import { Container } from '@/components/atoms/container';

export function Contact() {
  return (
    <Container className="flex items-center" as="section" id="contact">
      <Button
        href="mailto:dominik.rubroeder@icloud.com?subject=I want to write you about..."
        className="mx-auto"
      >
        <EnvelopeIcon className="size-6" />
        Do you need more infos?
      </Button>
    </Container>
  );
}
