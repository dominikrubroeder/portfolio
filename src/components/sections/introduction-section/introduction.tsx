import React from 'react';
import { cn } from '@/lib/utils';

export default function Introduction({ className }: { className?: string }) {
  return (
    <div className={cn('mx-auto w-full max-w-screen-sm space-y-6', className)}>
      <h3 className="font-bold text-foreground">
        My work is committed to the frontend.
      </h3>

      <div className="space-y-4">
        <p>
          I am a UX design engineer working for good user interfaces that
          transport emotion and cares about the impact of design. I want the
          user to enjoy their actions, feeling pleasant and delightful while
          scrolling through the page, pursuing his or her actions with joyful
          ease.
        </p>

        <p>
          With smooth animations and transitions that support the user&apos;s
          behaviour and provide guidance, the application should feel
          interactive, yet stable. Supporting the user to achieve their goals
          and intentions on the site seamlessly.
        </p>

        <p>
          I like to use psychological and design principles to build better
          production applications.
        </p>

        <p>
          I think when the idea and the vision is clear, you can build the best
          product possible, with the right people, and the right technology.
        </p>
      </div>
    </div>
  );
}
