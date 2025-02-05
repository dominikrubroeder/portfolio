import { EnvelopeIcon } from '@heroicons/react/24/outline';
import Button from '@/components/atoms/button';
import React from 'react';

export default function ButtonContactMe() {
  return (
    <Button
      variant="secondary"
      href="mailto:dominik.rubroeder@icloud.com"
      asLink
    >
      <EnvelopeIcon className="size-5 shrink-0" /> Contact me
    </Button>
  );
}
