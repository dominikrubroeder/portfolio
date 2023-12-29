'use client';
import { useState } from 'react';
import { Technology } from '@/lib/interfaces';
import Image from 'next/image';
import { ArrowRightIcon, PlusIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { MinusIcon } from '@heroicons/react/20/solid';

export default function TechnologyMoreOn({
  technologies
}: {
  technologies: Technology[];
}) {
  const [state, setState] = useState<{ isVisible: boolean }>({
    isVisible: false
  });

  if (!technologies.some((technology) => technology.priority === 'low'))
    return null;

  return (
    <div>
      <div
        className="flex items-center gap-4 cursor-pointer mb-4 select-none"
        onClick={() =>
          setState((prevState) => {
            return { isVisible: !prevState.isVisible };
          })
        }
      >
        <button
          className="h-14 w-14 flex items-center justify-center rounded-full bg-gray-5 transition hover:text-white"
          aria-label="Show more technologys"
        >
          {state.isVisible && <MinusIcon className="h-4 w-4" />}
          {!state.isVisible && <PlusIcon className="h-4 w-4" />}
        </button>
        <div className="rounded-full bg-gray-5 p-4 px-6 transition hover:text-white">
          {state.isVisible ? 'Hide' : 'More on Technologies'}
        </div>
      </div>

      <ul
        className={`transition ${
          state.isVisible ? 'translate-y-0 visible' : 'translate-y-6 invisible'
        }`}
      >
        {technologies.map((technology) => {
          if (technology.priority === 'low')
            return (
              <li key={technology.title}>
                <div className="group border-b py-4 border-gray-5 flex items-center justify-between gap-4 text-xs pr-4">
                  <div className="flex items-center gap-4">
                    <Link
                      href={technology.website}
                      target="_blank"
                      className="flex items-center justify-center gap-4"
                    >
                      <Image
                        width={32}
                        height={32}
                        className="object-contain"
                        src={technology.logo}
                        alt={technology.title}
                      />
                      <h3 className="text-white w-24 font-bold">
                        {technology.title}
                      </h3>
                    </Link>

                    <p>{technology.description}</p>
                  </div>

                  <div className="flex gap-4 transition">
                    <Link
                      href={technology.website}
                      target="_blank"
                      title={`Go to external ${technology.title} project page`}
                      aria-label={`Go to ${technology.title} project page`}
                      className="flex items-center justify-center rounded-2xl p-4 transition bg-gray-5 group"
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