import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/lib/utils';

export default function Avatar({
  width,
  height,
  as,
  className
}: {
  width: number;
  height: number;
  as?: 'Image' | 'Link';
  className?: string;
}) {
  if (as === 'Image')
    return (
      <Image
        src="/avatar.jpg"
        alt="Image of Dominik Rubröder"
        width={width}
        height={height}
        className={cn('shrink-0 rounded-full border-2', className)}
        draggable={false}
      />
    );

  return (
    <Link
      href="/"
      className="shrink-0 interactive"
      title="Go to Home page"
      aria-label="Click to go to Home page"
      prefetch
    >
      <Image
        src="/avatar.jpg"
        alt="Image of Dominik Rubröder"
        width={width}
        height={height}
        className={cn('shrink-0 rounded-full border-2', className)}
        draggable={false}
      />
    </Link>
  );
}
