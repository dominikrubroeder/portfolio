import Image from 'next/image';
import { Blockquote } from '@/components/atoms/blockquote';
import { ExternalLink } from '@/components/atoms/external-link';

export function QAndAWhatIsAUxEngineer() {
  return (
    <>
      <Blockquote className="mt-0" quotes>
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
          width={600}
          height={171}
          className="rounded-2xl-xl object-contain"
          draggable={false}
          loading="eager"
        />

        <figcaption>
          Reference to UXE user experience engineering work areas at
          <ExternalLink href="https://uxe.withgoogle.com" size="sm">
            uxe.google.com
          </ExternalLink>
          .
        </figcaption>
      </figure>

      <p className="mt-4">
        A additional description can be found
        <ExternalLink href="https://www.coursera.org/articles/what-is-a-ux-engineer">
          here
        </ExternalLink>
        .
      </p>
    </>
  );
}
