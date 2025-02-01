import React from 'react';
import Marker from '@/components/atoms/marker';
import Button from '../atoms/button';
import { DocumentTextIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

export default function HomeHero() {
  return (
    <section
      id="hero"
      className="mx-auto flex max-w-(--breakpoint-sm) items-center justify-center space-y-4 px-4 pt-8 pb-14 lg:min-h-[78svh] lg:px-0"
    >
      <div className="space-y-6">
        <h2 className="text-6xl font-bold text-foreground sm:text-8xl">
          Team <Marker animate>Frontend</Marker>
        </h2>

        <div className="space-y-8">
          <p className="mx-1 text-xl leading-relaxed font-bold text-primary">
            <Marker animate>
              Creating and building user interfaces that work.
            </Marker>{' '}
            Together with a little bit of psychology, we build a better user
            experience.
          </p>

          <div className="space-x-3">
            <Button variant="primary">
              <DocumentTextIcon className="size-5 shrink-0" /> Read more
            </Button>

            <Button variant="secondary">
              <EnvelopeIcon className="size-5 shrink-0" /> Contact
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
