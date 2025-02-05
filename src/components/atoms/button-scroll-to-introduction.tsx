'use client';

import { DocumentTextIcon } from '@heroicons/react/24/outline';
import { ArrowDownIcon } from '@heroicons/react/24/solid';
import Button from '@/components/atoms/button';
import React from 'react';
import { useScrollIntoView } from '@/hooks/useScrollIntoView';

export default function ButtonScrollToIntroduction() {
  const { scrollIntoView } = useScrollIntoView();

  return (
    <Button
      variant="primary"
      onClick={() => scrollIntoView({ id: 'introduction' })}
    >
      <DocumentTextIcon className="size-5 shrink-0" /> Read more
      <ArrowDownIcon className="size-4 shrink-0" />
    </Button>
  );
}
