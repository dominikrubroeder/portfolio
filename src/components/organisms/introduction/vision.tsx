import Link from '@/components/atoms/link';
import React from 'react';

export function Vision() {
  return (
    <div className="mb-8 space-y-4">
      <p>
        As a UX Design Engineer, i am working for good user interfaces that
        cares about the impact of design. I want the user to enjoy their
        actions, feeling pleasant and delightful while scrolling through the
        page, pursuing their actions with joyful ease.
      </p>

      <p>
        When a brand, people related to the brand and their users can identify
        and relate to that interface, it will be much likely be more appreciated
        and accepted.
      </p>

      <p>
        In addition, the business and the business objectives are crucial for
        making conscious and argumentative design decisions. And where to drive
        and prioritize when it comes to feature implementation.
      </p>

      <div>
        <p>
          <b className="text-foreground">Animations and transitions</b>
        </p>

        <p>
          Smooth animations and transitions that support the user&apos;s
          behaviour and provide guidance should feel interactive, yet stable.
          Supporting people to achieve their goals and intentions on the site
          with a seamless feel and the use of microinteractions.
        </p>

        <ul className="mt-2 ml-4 list-disc space-y-4">
          <li>
            <div>
              <span>See</span>
              <Link
                href="https://animations.dev/"
                title="Open Animations on the Web, by Emil Kowalski"
                aria-label="Open Animations on the Web, by Emil Kowalski"
              >
                Animations on the Web, by Emil Kowalski
              </Link>
            </div>
          </li>
          <li>
            <span>See</span>
            <Link
              href="https://www.nngroup.com/articles/microinteractions/"
              title="Open Animations on the Web, by Emil Kowalski"
              aria-label="Open Animations on the Web, by Emil Kowalski"
            >
              Microinteractions in User Experience, by NN/g
            </Link>
          </li>
        </ul>
      </div>

      <div>
        <p>
          <b className="text-foreground">Vision claim</b>
        </p>

        <i>
          I believe: when the idea and the vision is clear, you can build the
          best product possible, with the right people, and the right
          technology.
        </i>
      </div>

      <div className="space-y-2">
        <p>
          <b className="text-foreground">Further links</b>
        </p>

        <ul className="ml-4 list-disc space-y-4">
          <li>
            <Link
              href="https://lawsofux.com"
              title="Open Laws of UX from Jon Yablonski about psychological principles for UX and Design"
              aria-label="Open Laws of UX from Jon Yablonski about psychological principles for UX and Design"
              className="ml-0"
            >
              Psychology and design principles, by Jon Yablonski
            </Link>
          </li>
          <li>
            <Link
              href="https://nextjs.org/docs/app/building-your-application/deploying/production-checklist"
              title="Open production checklist on the Next.js documenation"
              aria-label="Open production checklist on the Next.js documenation"
              className="ml-0"
            >
              Production checklist on Next.js
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
