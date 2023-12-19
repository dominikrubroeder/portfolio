import Image from 'next/image';
import { ChevronDoubleUpIcon } from '@heroicons/react/24/outline';

export default async function HomePage() {
  return (
    <>
      <section className="flex min-h-screen items-center justify-center">
        <div className="max-w-max">
          <h1 className="text-gradient bg-gradient-to-t from-apple-purple to-apple-pink text-8xl font-extrabold uppercase">
            Team frontend
          </h1>
        </div>
      </section>

      <section className="sticky top-2 p-4 w-full text-center border-white/10">
        <div className="mx-auto flex gap-4 items-center justify-center">
          <div className="flex items-center gap-4">
            <Image
              src="/avatar.jpg"
              alt="Dominik Rubröder Avatar"
              width="64"
              height="64"
              className="shrink-0 rounded-full border-white/10 bg-white/10 p-4"
            />
          </div>
          <ul className="flex gap-4 rounded-full bg-white/10 p-4 px-6 items-center">
            <li className="bg-white/20 rounded-full p-2 px-3">Projects</li>
            <li>Technologies</li>
            <li>Socials</li>
          </ul>
          <div className="flex items-center gap-4 justify-center bg-white/10 rounded-full h-16 w-16">
            <ChevronDoubleUpIcon className="h-5 w-5" />
          </div>
        </div>
      </section>

      <section className="min-h-screen"></section>

      <section className="min-h-screen"></section>

      <section className="min-h-screen"></section>
    </>
  );
}
