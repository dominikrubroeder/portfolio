import Accordion from '@/components/atoms/accordion';
import Image from 'next/image';
import Blockquote from '@/components/ui/blockquote';
import Anchor from '@/components/atoms/link';

export default function WhatIsAUxEngineer() {
  return (
    <Accordion title="What is an UX Engineer?">
      <Blockquote className="mt-4" quotes>
        <b className="text-foreground">Bring all your skills into one role</b>.
        As a UX Engineer at Google, you’ll combine your design, engineering, and
        product intuition to help build experiences for everyone to enjoy.
      </Blockquote>

      <Blockquote quotes author="Tyler F, UXE at Google" quoteBar={false}>
        You’ll never have the same day. One day you might design an animation
        for an app, and the next day, you might write a machine learning
        algorithm.
      </Blockquote>

      <figure className="space-y-2">
        <Image
          src="/uxe-user-experience-engineer-at-google.png"
          alt="UXE user experience engineer at google"
          width={1024}
          height={292}
          className="rounded-xl object-contain"
          draggable={false}
        />

        <figcaption>
          Reference to UXE user experience engineering work areas at
          <Anchor
            href="https://uxe.withgoogle.com"
            title="Go to external uxe.google.com website"
            aria-label="UX Engineer landingpage from Google at uxe.google.com describing the role as an UX Engineer while working for Google"
          >
            uxe.google.com
          </Anchor>
        </figcaption>
      </figure>
    </Accordion>
  );
}
