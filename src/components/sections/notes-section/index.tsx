import Mindset from '@/components/sections/notes-section/mindset';
import WhatIsAUxEngineer from '@/components/sections/notes-section/what-is-a-ux-engineer';
import Books from '@/components/sections/notes-section/books';
import HeyChatGptUxDesigner from '@/components/sections/notes-section/hey-chat-gpt-ux-designer';
import HeyChatGptUxEngineer from '@/components/sections/notes-section/hey-chat-gpt-ux-engineer';
import DesignEngineerVsUxEngineer from '@/components/sections/notes-section/design-engineer-vs-ux-engineer';
import React from 'react';

export default function NotesSection() {
  return (
    <section className="space-y-16 px-4 py-12">
      <p className="mx-auto max-w-screen-sm px-4">
        <b className="text-theme-contrary">My work is</b>, I am as much a
        designer as an design engineer, like a waiter who is actually a chef in
        the kitchen, free in delivering on both lines – or on both endpoints.
        <br />
        <br />
        Combining the best of both worlds into the knowledge and precision of a
        refined product that is enjoyable to use – the world of UX. I love
        supportive animations and transitions, designing with UI-shows-business
        focus and code in mind; developing, engineering by design.
        <br />
        <br />
        When the idea and the vision is clear, you can follow them from the
        first thought over designing, reiterating, engineering, until it is the
        one final, refined product that it needs to be.
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
    </section>
  );
}
