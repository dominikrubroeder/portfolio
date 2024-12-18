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
        className="hover: group flex size-14 cursor-pointer items-center justify-center gap-4 rounded-full  border-2 bg-muted transition hover:bg-muted-hover"
        aria-label="Scroll to top"
        onClick={() => scrollToTop()}
      >
        <ArrowUpIcon className="size-4 transition group-hover:text-foreground" />
      </button>
    );

  if (type === 'Back')
    return (
      <button
        className="hover: group flex size-14 cursor-pointer items-center justify-center gap-4 rounded-full  border-2 bg-muted transition hover:bg-muted-hover"
        aria-label="Navigate back"
        onClick={() => router.back()}
      >
        <ArrowLeftIcon className="size-4 transition group-hover:text-foreground" />
      </button>
    );

  return (
    <Link href="/" className="button flex items-center gap-4">
      <Image
        src="/avatar.jpg"
        alt="Dominik Rubröder Avatar"
        width="56"
        height="56"
        className="shrink-0 rounded-full border-2 "
        draggable={false}
      />
    </Link>
  );
}
