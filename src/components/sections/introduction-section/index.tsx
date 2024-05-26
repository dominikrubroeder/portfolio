import WhatIsAUxEngineer from '@/components/sections/introduction-section/what-is-a-ux-engineer';
import HeyChatGptUxDesigner from '@/components/sections/introduction-section/hey-chat-gpt-ux-designer';
import HeyChatGptUxEngineer from '@/components/sections/introduction-section/hey-chat-gpt-ux-engineer';
import DesignEngineerVsUxEngineer from '@/components/sections/introduction-section/design-engineer-vs-ux-engineer';
import React from 'react';
import Books from '@/components/sections/introduction-section/books';

export default function IntroductionSection() {
  return (
    <section className="px-4 py-12 pt-28 md:pt-32" id="introduction">
      <div>
        <h2 className="sticky top-0 mx-auto w-full max-w-screen-sm border-b border-b-gray-5 bg-gray-6 py-3 md:hidden">
          Introduction
        </h2>

        <br />

        <div className="grid gap-4">
          <p className="mx-auto w-full max-w-screen-sm font-bold text-theme-contrary">
            My work is committed to the frontend.
          </p>

          <p className="mx-auto w-full max-w-screen-sm">
            I am a Designer and a UX Engineer, working for good user interfaces
            that transport emotion and does care about the business impact of
            design, and the product. I want the user to enjoy their actions,
            feeling pleasent and delightful while scrolling through the page.
          </p>

          <p className="mx-auto w-full max-w-screen-sm">
            With smooth animations and transitions that support user behaviour
            and provide guidance, the application should feel interactive, yet
            stable. Supporting the user to achieve their goals and intensions on
            the side.
          </p>

          <p className="mx-auto mb-16 w-full max-w-screen-sm">
            I think that when the idea and the vision is clear, so can the
            product be, therefore fullfilling the business needs of the
            application.
          </p>
        </div>
      </div>

      <div>
        <h2 className="sticky top-0 mx-auto max-w-screen-sm border-b border-b-gray-5 bg-gray-6 py-3 lg:top-20">
          Books
        </h2>

        <br />

        <div className="mx-auto mb-16 max-w-screen-sm py-4">
          <Books />
        </div>
      </div>

      <div>
        <h2 className="sticky top-0 mx-auto max-w-screen-sm border-b border-b-gray-5 bg-gray-6 py-3 lg:top-20">
          Blog
        </h2>

        <br />

        <p className="mx-auto mb-16 max-w-screen-sm py-4">Blog articles here</p>
      </div>

      <div>
        <h2 className="sticky top-0 mx-auto max-w-screen-sm border-b border-b-gray-5 bg-gray-6 py-3 lg:top-20">
          Mindset
        </h2>

        <br />

        <p className="mx-auto mb-16 max-w-screen-sm py-4">Mindset here</p>
      </div>

      <div className="mx-auto max-w-2xl" id="accordion-group">
        <WhatIsAUxEngineer />
        <HeyChatGptUxDesigner />
        <HeyChatGptUxEngineer />
        <DesignEngineerVsUxEngineer />
      </div>
    </section>
  );
}
