import React from 'react';
import ModeSwitch from '@/components/blog/how-i-work/mode-switch';
import { Metadata } from 'next';
import TheDesignProcess from '@/components/blog/how-i-work/the-design-process';
import ComponentDrivenDevelopment from '@/components/blog/how-i-work/component-driven-development';

export const metadata: Metadata = {
  title: 'How i work | Portfolio',
  description: '...'
};

export default function HowIWorkPage({
  searchParams
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const mode = searchParams.mode;

  return (
    <div className="py-8">
      <section className="mt-32 grid gap-8">
        <div className="px-4 text-center">
          <ModeSwitch />
        </div>
      </section>

      {mode === undefined ? (
        <TheDesignProcess />
      ) : mode === 'development' ? (
        <ComponentDrivenDevelopment />
      ) : (
        <TheDesignProcess />
      )}
    </div>
  );
}
