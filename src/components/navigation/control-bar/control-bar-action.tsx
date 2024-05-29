'use client';

import type { ControlBarAction } from '@/types';
import { ArrowLeftIcon, ArrowUpIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { useUpdateSearchParams } from '@/hooks/useUpdateSearchParams';

export default function ControlBarAction({ type }: { type: ControlBarAction }) {
  const { router, deleteSearchParam } = useUpdateSearchParams();

  function scrollToTop() {
    document.body.scrollIntoView({ behavior: 'smooth' });
    deleteSearchParam('section');
  }

  if (type === 'Up')
    return (
      <button
        className="group flex size-14 cursor-pointer items-center justify-center gap-4 rounded-full border-2 border-gray-5 bg-gray-5 transition hover:border-gray-4 hover:bg-gray-4"
        aria-label="Scroll to top"
        onClick={() => scrollToTop()}
      >
        <ArrowUpIcon className="size-4 transition group-hover:text-theme-contrary" />
      </button>
    );

  if (type === 'Back')
    return (
      <button
        className="group flex size-14 cursor-pointer items-center justify-center gap-4 rounded-full border-2 border-gray-5 bg-gray-5 transition hover:border-gray-4 hover:bg-gray-4"
        aria-label="Navigate back"
        onClick={() => router.back()}
      >
        <ArrowLeftIcon className="size-4 transition group-hover:text-theme-contrary" />
      </button>
    );

  return (
    <Link href="/public" className="button flex items-center gap-4">
      <Image
        src="/avatar.jpg"
        alt="Dominik Rubröder Avatar"
        width="56"
        height="56"
        className="shrink-0 rounded-full border-2 border-gray-5"
        draggable={false}
      />
    </Link>
  );
}
