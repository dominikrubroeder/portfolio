import Image from 'next/image';
import {
  ArrowRightIcon,
  ArrowTopRightOnSquareIcon
} from '@heroicons/react/24/solid';
import Link from 'next/link';
import { Technology } from '@/interfaces';

export default function Technology({ technology }: { technology: Technology }) {
  return (
    <div className="grid gap-6 w-80 whitespace-normal">
      <div className="relative border rounded-xl h-80 w-80">
        <div className="absolute flex justify-center items-center inset-0 w-full h-full">
          <Image
            src={
              technology.logo.length === 0
                ? 'https://dominikrubroeder.vercel.app/figma.png'
                : technology.logo
            }
            alt={technology.title}
            className="max-h-32 max-w-32 object-contain shrink-0"
            width="128"
            height="128"
            draggable={false}
          />
        </div>
      </div>
      <div className="rounded-3xl border w-max mx-auto px-3 py-2 font-bold text-theme-contrary">
        {technology.keyword}
      </div>

      <div className="grid content-start gap-2 h-20">
        <h2 className="text-theme-contrary font-bold mx-auto">
          {technology.title}
        </h2>
        <p className="italic text-center line-clamp-2">
          {technology.description}
        </p>
      </div>

      <div className="opacity-0 invisible grid grid-cols-2 gap-4 translate-y-4 transition group-hover:opacity-100 group-hover:visible group-hover:translate-y-0">
        <button
          title={`Go to projects with ${technology.title}`}
          aria-label={`Go to projects with ${technology.title}`}
          className="flex items-center justify-center h-16 rounded-2xl bg-gray-5"
          disabled
        >
          <ArrowRightIcon className="h-5 w-5" />
        </button>
        <Link
          href={technology.website}
          target="_blank"
          title={`Go to external ${technology.title} landingpage`}
          aria-label={`Go to external ${technology.title} landingpage`}
          className="flex items-center justify-center h-16 rounded-2xl transition hover:bg-gray-5"
        >
          <ArrowTopRightOnSquareIcon className="h-5 w-5 text-theme-contrary" />
        </Link>
      </div>
    </div>
  );
}
