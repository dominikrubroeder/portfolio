'use client';

import {
  ControlBarActionType,
  ControlBarNavigation,
  ControlBarSections,
  useControlBar
} from '@/components/molecules/control-bar';
import { Container } from '@/components/atoms/container';
import React from 'react';
import { EnvelopeIcon, SparklesIcon } from '@heroicons/react/24/outline';
import { cn } from '@/lib/utils';

export function ControlBar({
  sections,
  leftActions,
  rightActions
}: {
  sections: ControlBarSections;
  leftActions?: ControlBarActionType;
  rightActions?: ControlBarActionType;
}) {
  const { activeSection, isUnfolded, toggleIsUnfolded } = useControlBar();

  return (
    <Container className="sticky top-4">
      <nav className="relative z-max mx-auto flex w-max items-center gap-2">
        <div>
          <button className="group flex h-11 min-w-11 cursor-pointer items-center justify-center gap-2 rounded-full border bg-muted px-3 transition hover:bg-muted-hover">
            <EnvelopeIcon className="size-5 transition group-hover:text-foreground" />
            <span className={cn(isUnfolded ? 'hidden' : 'sm:inline-block')}>
              Contact
            </span>
          </button>
        </div>

        <ControlBarNavigation
          sections={sections}
          setActiveSection={() => {}}
          activeSection={activeSection}
          isUnfolded={isUnfolded}
          toggleIsUnfolded={toggleIsUnfolded}
        />

        <div>
          <button className="group flex h-11 min-w-11 cursor-pointer items-center justify-center gap-2 rounded-full border bg-muted px-3 transition hover:bg-muted-hover">
            <SparklesIcon className="size-5 transition group-hover:text-foreground" />
            <span className={cn(isUnfolded ? 'hidden' : 'sm:inline-block')}>
              Theme
            </span>
          </button>
        </div>
      </nav>
    </Container>
  );
}
