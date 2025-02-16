import Link from '@/components/atoms/link';
import React from 'react';

export default function Vision() {
  return (
    <div className="space-y-4">
      <p>
        As a UX Design Engineer, i am working for good user interfaces that
        cares about the impact of design. I want the user to enjoy their
        actions, feeling pleasant and delightful while scrolling through the
        page, pursuing their actions with joyful ease.
      </p>

      <p>
        When a brand, people related to the brand and their users can identify
        and relate to the interface, it will be much likely be more appreciated
        and accepted.
      </p>

      <p>
        Smooth animations and transitions that support the user&apos;s behaviour
        and provide guidance should feel interactive, yet stable. Supporting
        people to achieve their goals and intentions on the site seamlessly.
      </p>

      <p>
        I believe:
        <i>
          when the idea and the vision is clear, you can build the best product
          possible, with the right people, and the right technology.
        </i>
      </p>

      <p>
        I like to use
        <Link
          href="https://lawsofux.com"
          title="Open Laws of UX from Jon Yablonski about psychological principles for UX and Design"
          aria-label="Open Laws of UX from Jon Yablonski about psychological principles for UX and Design"
        >
          psychological and design principles
        </Link>
        to build better and stable
        <Link
          href="https://nextjs.org/docs/app/building-your-application/deploying/production-checklist"
          title="Open production checklist on the Next.js documenation"
          aria-label="Open production checklist on the Next.js documenation"
        >
          production
        </Link>
        applications.
      </p>
    </div>
  );
}
