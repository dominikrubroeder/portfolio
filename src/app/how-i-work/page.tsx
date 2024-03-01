import React from 'react';
import ModeSwitch from '@/components/how-i-work/mode-switch';

export default function HowIWorkPage({
  searchParams
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const mode = searchParams.toString();

  return (
    <>
      <section className="hero mt-32 grid gap-8">
        <div className="px-4 text-center">
          <ModeSwitch />
        </div>

        <div className="mx-auto grid w-full max-w-screen-lg gap-2 px-4">
          <h2>How i work</h2>
          <h1 className="text-6xl font-bold text-theme-contrary">
            The Design Process
          </h1>
        </div>

        <div className="mx-auto grid w-full max-w-screen-lg gap-2 px-4">
          <p>Depending on the project</p>
        </div>

        <div className="mx-32 mt-32 h-96 animate-fadeUp rounded-2xl bg-gray-5"></div>
      </section>
    </>
  );
}
