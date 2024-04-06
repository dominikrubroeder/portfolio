import Mindset from '@/components/sections/introduction-section/mindset';
import WhatIsAUxEngineer from '@/components/sections/introduction-section/what-is-a-ux-engineer';
import Books from '@/components/sections/introduction-section/books';
import HeyChatGptUxDesigner from '@/components/sections/introduction-section/hey-chat-gpt-ux-designer';
import HeyChatGptUxEngineer from '@/components/sections/introduction-section/hey-chat-gpt-ux-engineer';
import DesignEngineerVsUxEngineer from '@/components/sections/introduction-section/design-engineer-vs-ux-engineer';
import React from 'react';

export default function IntroductionSection() {
  return (
    <section className="px-4 py-12 pt-32" id="introduction">
      <h2 className="mx-auto max-w-screen-sm px-4">Introduction</h2>

      <br />

      <p className="mx-auto mb-16 max-w-screen-sm px-4">
        <b className="text-theme-contrary">My work is</b>, I am as much a
        Designer as an UX Engineer, like a waiter who is actually a chef in the
        kitchen, free in delivering on both lines – or on both endpoints, but
        <span className="ml-1.5 font-bold text-theme-contrary">
          committed to the frontend
        </span>
        .
        <br />
        <br />
        Combining the best of both worlds into the knowledge and precision of a
        refined product UI that is enjoyable to use – the world of UX. I love
        supportive animations and transitions, designing with
        <b className="mx-1.5 text-theme-contrary">UI-shows-business</b>
        focus and code in mind; developing, engineering by design.
        <br />
        <br />
        <b className="text-theme-contrary">
          When the idea and the vision is clear
        </b>
        , you can follow them from the first thought over designing,
        reiterating, engineering, until it is the one final, refined product
        that it needs to be.
      </p>

      <div className="mx-auto max-w-2xl">
        <WhatIsAUxEngineer />
        <Mindset />
        <Books />
        <HeyChatGptUxDesigner />
        <HeyChatGptUxEngineer />
        <DesignEngineerVsUxEngineer />
      </div>
    </section>
  );
}
