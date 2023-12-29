import Image from 'next/image';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { Tool } from '@/lib/interfaces';

export default function Tool({ tool }: { tool: Tool }) {
  return (
    <div className="grid gap-6 w-80 whitespace-normal">
      <div className="relative border rounded-xl h-80 w-80">
        <Link
          href={`/tool/${tool.title.toLowerCase().replaceAll(' ', '-')}`}
          className="absolute flex justify-center items-center inset-0 w-full h-full"
        >
          <Image
            src={
              tool.logo.length === 0
                ? 'https://dominikrubroeder.vercel.app/figma.png'
                : tool.logo
            }
            alt={tool.title}
            className="max-h-32 max-w-32 object-contain shrink-0"
            width="128"
            height="128"
            draggable={false}
          />
        </Link>
      </div>
      <div className="rounded-3xl border w-max mx-auto px-3 py-2 font-bold text-theme-contrary">
        {tool.keyword}
      </div>

      <div className="grid content-start gap-2 h-20">
        <h2 className="text-theme-contrary font-bold mx-auto">{tool.title}</h2>
        <p className="italic text-center line-clamp-2">{tool.description}</p>
      </div>

      <div className="opacity-0 invisible grid grid-cols-2 gap-4 translate-y-4 transition group-hover:opacity-100 group-hover:visible group-hover:translate-y-0">
        <button
          title={`Projects with ${tool.title} are coming soon.`}
          aria-label={`Projects with ${tool.title} are coming soon.`}
          className="flex items-center justify-center h-16 rounded-2xl bg-gray-5 text-xs"
          disabled
        >
          Projects coming soon
        </button>
        <Link
          href={tool.website}
          target="_blank"
          title={`Go to external ${tool.title} landingpage`}
          aria-label={`Go to external ${tool.title} landingpage`}
          className="flex items-center justify-center h-16 rounded-2xl transition hover:bg-gray-5"
        >
          <ArrowTopRightOnSquareIcon className="h-5 w-5 text-theme-contrary" />
        </Link>
      </div>
    </div>
  );
}
