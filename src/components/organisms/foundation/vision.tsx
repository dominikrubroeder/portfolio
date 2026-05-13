'use client';

import { HeroBox } from '@/components/molecules/hero-box';
import { Button } from '@/components/atoms/button';
import { MinusIcon, PlusIcon } from '@heroicons/react/16/solid';
import { useState } from 'react';

export function Vision() {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <HeroBox
      overline="Vision: What drives me"
      title={
        collapsed ? (
          <div>
            A design system is a click and go collection of components...
            <Button
              size="small"
              className="mx-1 -translate-y-2"
              onClick={() => setCollapsed((prevState) => !prevState)}
              title="Expand vision details"
              aria-label="Click to expand vision details"
            >
              <PlusIcon />
            </Button>
            composing them like music. Designers and engineers need to work
            together to create the best possible set.
          </div>
        ) : (
          <div>
            A design system is a click and go collection of components
            <span className="ml-1 text-primary">
              with guidelines, principles and documentation...
            </span>
            <Button
              size="small"
              className="mx-1 -translate-y-2"
              onClick={() => setCollapsed((prevState) => !prevState)}
              title="Collapse vision details"
              aria-label="Click to collapse vision details"
            >
              <MinusIcon />
            </Button>
            composing them like music. Designers and engineers need to work
            together to create the best possible set with the fundamentals set
            in the business strategy.
          </div>
        )
      }
    />
  );
}
