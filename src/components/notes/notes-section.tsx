import Mindset from '@/components/notes/mindset';
import WhatIsAUxEngineer from '@/components/notes/what-is-a-ux-engineer';
import Books from '@/components/notes/books';
import HeyChatGptUxDesigner from '@/components/notes/hey-chat-gpt-ux-designer';
import HeyChatGptUxEngineer from '@/components/notes/hey-chat-gpt-ux-engineer';
import DesignEngineerVsUxEngineer from '@/components/notes/design-engineer-vs-ux-engineer';
import { ArrowLongRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import React from 'react';

export default function NotesSection() {
  return (
    <section className="space-y-16 px-4 py-12">
      <p className="mx-auto max-w-screen-sm px-4">
        <b className="text-theme-contrary">My work is</b>, I am as much a
        designer as an developer, as an engineer, like a waiter who is actually
        a chef in the kitchen, free in delivering on both lines – or on both
        endpoints.
        <br />
        <br />
        Combining the best of both worlds into the knowledge and precision of a
        refined product that is enjoyable to use — the world of UX. I love
        supportive animations and transitions, designing with code in mind, and
        developing, engineering by design.
        <br />
        <br />
        When the idea and the vision is clear, you can follow them from the
        first thought over designing, reiterating, engineering, until the one
        final, refined product is there that it needs to be.
      </p>

      <div className="mx-auto max-w-2xl">
        <WhatIsAUxEngineer />
        <Mindset />
        <Books />
        <HeyChatGptUxDesigner />
        <HeyChatGptUxEngineer />
        <div className="pt-4">
          <DesignEngineerVsUxEngineer />
        </div>
      </div>

      <Link
        href="/how-i-work"
        className="mx-auto flex min-w-44 max-w-max items-center justify-between gap-4 rounded-full bg-gray-5 p-3 px-5 transition hover:bg-gray-4"
        title="Link to how i work page"
        aria-label="Link to How i work page"
      >
        <span className="font-bold text-violet-400">How i work</span>
        <ArrowLongRightIcon className="h-4 w-4" />
      </Link>

      <hr className="mx-auto max-w-screen-md" />

      <div className="mx-auto max-w-screen-md">
        Further reading:
        <Link href="/" className="text-accent">
          Argument-based Design Decisions
        </Link>
      </div>
    </section>
  );
}
