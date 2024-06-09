import Accordion from '@/components/atoms/accordion';
import Link from 'next/link';
import AccordionMini from '@/components/atoms/accordion-mini';
import Divider from '@/components/ui/divider';
import Image from 'next/image';
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import Blockquote from '@/components/ui/blockquote';

export default function WhatIsAUxEngineer() {
  return (
    <Accordion title="What is an UX Engineer?">
      <div className="space-y-8">
        <p>
          <b className="text-theme-contrary">
            The bridge between design and development
          </b>
          . A UX Engineer can also be the combo package itself, a Designer which
          is capable of developing his thoughts, layouts and concepts into real
          world (production) applications. Also, the ability of communicating on
          the how to, and why, is crucial for this role.
        </p>

        <p>
          The working tools (Wireframe tools like <i>Figma</i> for Designers or
          IDEs for developers etc.), are not the crucial part,
          <b className="mx-1.5 text-theme-contrary">
            the thoughts and mental model are.
          </b>
          The tools are just a way of making the concept
          <i className="mx-1">visual</i>and<i className="ml-1">visible</i>.
        </p>

        <div>
          Soft skills
          <ul className="list-disc pl-8">
            <li>
              Beneficial is a sense of empathy and curiosity for tech and design
            </li>
          </ul>
        </div>
      </div>

      <Divider className="mb-8 mt-12" spacing="wider" indented />

      <AccordionMini title="UX Engineer at Google">
        <Blockquote quotes>
          <b className="text-theme-contrary">
            Bring all your skills into one role
          </b>
          . As a UX Engineer at Google, you’ll combine your design, engineering,
          and product intuition to help build experiences for everyone to enjoy.
        </Blockquote>

        <Blockquote quotes author="Tyler F, UXE at Google" quoteBar={false}>
          You’ll never have the same day. One day you might design an animation
          for an app, and the next day, you might write a machine learning
          algorithm.
        </Blockquote>

        <figure className="my-12">
          <Image
            src="/uxe-user-experience-engineer-at-google.png"
            alt="UXE user experience engineer at google"
            width={1024}
            height={292}
            className="object-contain"
          />
          <figcaption>
            Reference to UXE user experience engineering work areas at
            <Link
              href="https://uxe.withgoogle.com"
              target="_blank"
              className="ml-1 transition hover:text-theme-contrary"
              title="Go to external uxe.google.com website"
              aria-label="UX Engineer landingpage from Google at uxe.google.com describing the role as an UX Engineer while working for Google"
            >
              uxe.google.com
            </Link>
          </figcaption>
        </figure>

        <Link
          href="https://uxe.withgoogle.com/"
          target="_blank"
          className="flex items-center gap-2 text-accent"
        >
          Go to their website
          <ArrowRightIcon className="size-4 shrink-0 -rotate-45" />
        </Link>
      </AccordionMini>
    </Accordion>
  );
}
