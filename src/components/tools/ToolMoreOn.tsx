'use client';
import { useState } from 'react';
import { Tool } from '@/lib/interfaces';
import Image from 'next/image';
import { ArrowRightIcon, PlusIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { MinusIcon } from '@heroicons/react/20/solid';

export default function ToolMoreOn({ tools }: { tools: Tool[] }) {
  const [state, setState] = useState<{ isVisible: boolean }>({
    isVisible: false
  });

  if (!tools.some((tool) => tool.priority === 'low')) return null;

  return (
    <div>
      <div
        className="mb-4 flex cursor-pointer select-none items-center gap-4"
        onClick={() =>
          setState((prevState) => {
            return { isVisible: !prevState.isVisible };
          })
        }
      >
        <button
          className="flex h-14 w-14 items-center justify-center rounded-full bg-gray-5 transition hover:bg-gray-4 hover:text-theme-contrary"
          aria-label="Show more tools"
        >
          {state.isVisible && <MinusIcon className="h-4 w-4" />}
          {!state.isVisible && <PlusIcon className="h-4 w-4" />}
        </button>
        <div className="rounded-full bg-gray-5 p-4 px-6 transition hover:text-theme-contrary">
          {state.isVisible ? 'Hide' : 'More on Tools'}
        </div>
      </div>

      <ul
        className={`transition ${
          state.isVisible ? 'visible translate-y-0' : 'invisible translate-y-6'
        }`}
      >
        {tools.map((tool) => {
          if (tool.priority === 'low')
            return (
              <li key={tool.title}>
                <div className="group flex items-center justify-between gap-4 border-b border-gray-5 py-4 pr-4 text-xs">
                  <div className="grid gap-4 lg:flex lg:items-center">
                    <div className="flex items-center justify-center gap-4">
                      <Image
                        width={32}
                        height={32}
                        className="object-contain"
                        src={tool.logo}
                        alt={tool.title}
                      />

                      <h3 className="font-bold text-theme-contrary">
                        <Link
                          href={tool.website}
                          title={`Go to ${tool.title} external website`}
                          target="_blank"
                        >
                          {tool.title}
                        </Link>
                      </h3>

                      <div className="mr-auto w-max whitespace-nowrap rounded-3xl border border-gray-4 px-3 py-2 font-bold text-theme-contrary">
                        {tool.keyword}
                      </div>
                    </div>

                    <p className="flex-1 pl-12">{tool.description}</p>
                  </div>

                  <div className="flex items-center gap-4 transition">
                    <Link
                      href={`/tool/${tool.title
                        .toLowerCase()
                        .replaceAll(' ', '')}`}
                      target="_blank"
                      title={`Go to external ${tool.title} project page`}
                      aria-label={`Go to ${tool.title} project page`}
                      className="group flex items-center justify-center rounded-2xl bg-gray-5 p-4 transition hover:bg-gray-4"
                    >
                      <ArrowRightIcon className="h-5 w-5 transition group-hover:text-theme-contrary" />
                    </Link>
                  </div>
                </div>
              </li>
            );
        })}
      </ul>
    </div>
  );
}
