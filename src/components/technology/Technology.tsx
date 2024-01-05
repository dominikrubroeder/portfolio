import Image from 'next/image';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { Technology } from '@/lib/interfaces';

export default function Technology({ technology }: { technology: Technology }) {
  return (
    <div className="grid w-80 gap-6 whitespace-normal">
      <div className="relative h-80 w-80 rounded-xl border">
        <div className="absolute inset-0 flex h-full w-full items-center justify-center">
          <Image
            src={
              technology.logo.length === 0
                ? 'https://dominikrubroeder.vercel.app/figma.png'
                : technology.logo
            }
            alt={technology.title}
            className="max-h-32 max-w-32 shrink-0 object-contain"
            width="128"
            height="128"
            draggable={false}
          />
        </div>
      </div>
      <div className="mx-auto w-max rounded-3xl border px-3 py-2 font-bold text-theme-contrary">
        {technology.keyword}
      </div>

      <div className="grid h-20 content-start gap-2">
        <h2 className="mx-auto font-bold text-theme-contrary">
          {technology.title}
        </h2>
        <p className="line-clamp-2 text-center italic">
          {technology.description}
        </p>
      </div>

      <div className="invisible grid translate-y-4 grid-cols-2 gap-4 opacity-0 transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
        <button
          title={`Projects with ${technology.title} are coming soon.`}
          aria-label={`Projects with ${technology.title} are coming soon.`}
          className="relative flex h-16 items-center justify-center rounded-2xl bg-gray-5 p-4"
          disabled
        >
          <span className="absolute -right-2 -top-2 rounded bg-accent p-1 px-1.5 text-xs text-white">
            Soon
          </span>
          Projects coming
        </button>
        <Link
          href={technology.website}
          target="_blank"
          title={`Go to external ${technology.title} landingpage`}
          aria-label={`Go to external ${technology.title} landingpage`}
          className="flex h-16 items-center justify-center rounded-2xl transition hover:bg-gray-5"
        >
          <ArrowTopRightOnSquareIcon className="h-5 w-5 text-theme-contrary" />
        </Link>
      </div>
    </div>
  );
}
