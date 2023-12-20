import ControlBar from '@/components/ControlBar';
import ToolList from '@/components/ToolList';
import { Suspense } from 'react';

export default function HomePage() {
  return (
    <>
      <section className="flex h-[calc(100dvh-5rem)] items-center justify-center">
        <div className="max-w-max">
          <h1 className="text-8xl font-bold text-white">Team frontend.</h1>
        </div>
      </section>

      <ControlBar />

      <section
        id="projects"
        className="min-h-dvh flex items-center justify-center"
      >
        <p>Projects will be added soon.</p>
      </section>

      <section id="tools" className="min-h-dvh flex flex-col px-16 py-16 gap-8">
        <header className="flex gap-1">
          <h2 className="text-white font-bold">Tools</h2>
          <span>I use</span>
        </header>

        <Suspense fallback={'Loading...'}>
          <ToolList />
        </Suspense>
      </section>

      <section id="technologies" className="min-h-dvh flex items-center px-16">
        <header className="flex gap-1">
          <h2 className="text-white font-bold">Technologies</h2>
          <span>I use</span>
        </header>
      </section>

      <section id="socials" className="min-h-dvh flex items-center px-16">
        <header className="flex gap-1">
          <h2 className="text-white font-bold">Socials Accounts</h2>
          <span>I use</span>
        </header>
      </section>
    </>
  );
}
