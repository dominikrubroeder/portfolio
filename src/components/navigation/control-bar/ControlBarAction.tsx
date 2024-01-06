import { useRouter } from 'next/navigation';
import type { ControlBarAction } from '@/lib/types';
import { ArrowLeftIcon, ArrowUpIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

export default function ControlBarAction({ type }: { type: ControlBarAction }) {
  const router = useRouter();

  function scrollToTop() {
    document.body.scrollIntoView({ behavior: 'smooth' });
  }

  if (type === 'Up')
    return (
      <button
        aria-label="Scroll to top"
        onClick={() => scrollToTop()}
        className="group flex h-14 w-14 cursor-pointer items-center justify-center gap-4 rounded-full border-2 border-gray-5 bg-gray-5 transition hover:border-gray-4 hover:bg-gray-4"
      >
        <ArrowUpIcon className="h-4 w-4 transition group-hover:text-theme-contrary" />
      </button>
    );

  if (type === 'Back')
    return (
      <button
        aria-label="Navigate back"
        className="group flex h-14 w-14 cursor-pointer items-center justify-center gap-4 rounded-full border-2 border-gray-5 bg-gray-5 transition hover:border-gray-4 hover:bg-gray-4"
        onClick={() => router.back()}
      >
        <ArrowLeftIcon className="h-4 w-4 transition group-hover:text-theme-contrary" />
      </button>
    );

  return (
    <Link href="/public" className="flex items-center gap-4">
      <Image
        src="/avatar.jpg"
        alt="Dominik Rubröder Avatar"
        width="56"
        height="56"
        className="shrink-0 rounded-full border-2 border-gray-5"
      />
    </Link>
  );
}
