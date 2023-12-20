import Image from 'next/image';
import { ArrowLeftIcon, ArrowUpIcon } from '@heroicons/react/20/solid';

export default function ControlBar() {
  return (
    <nav className="sticky flex items-center justify-center gap-3 top-4 text-center border-white/10 z-50 mx-auto">
      <ControlBarAction type="Avatar" />
      <ul className="flex gap-4 rounded-full bg-white/10 p-4 px-6 items-center w-min">
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#tools">Tools</a>
        </li>
        <li>
          <a href="#tools">Technologies</a>
        </li>
        <li>
          <a href="#socials">Socials</a>
        </li>
      </ul>
      <ControlBarAction type="Up" />
    </nav>
  );
}

function ControlBarAction({ type }: { type: 'Avatar' | 'Up' | 'Back' }) {
  if (type === 'Up')
    return (
      <div className="flex items-center gap-4 justify-center bg-white/10 rounded-full w-14 h-14">
        <ArrowUpIcon className="h-4 w-4 text-white" />
      </div>
    );

  if (type === 'Back')
    return (
      <div className="flex items-center gap-4 justify-center bg-white/10 rounded-full w-14 h-14">
        <ArrowLeftIcon className="h-4 w-4 text-white" />
      </div>
    );

  return (
    <div className="flex items-center gap-4">
      <Image
        src="/avatar.jpg"
        alt="Dominik Rubröder Avatar"
        width="56"
        height="56"
        className="shrink-0 rounded-full border-2 border-gray-5"
      />
    </div>
  );
}
