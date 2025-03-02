import Link from 'next/link';
import { cn } from '@/lib/utils';
import Brand from '@/components/atoms/brand';
import type { Social } from '@/components/organisms/socials/types';

export default function Social({
  social,
  className
}: {
  social: Social;
  className?: string;
}) {
  return (
    <div className={cn('group w-80 space-y-6 text-center', className)}>
      <div className="relative mx-auto size-80 interactive rounded-xl border text-center transition group-hover:bg-muted">
        <Link
          href={social.website}
          className="absolute inset-0 flex size-full cursor-pointer items-center justify-center"
          target="_blank"
          title={`Go to ${social.title} page`}
          aria-label={`Go to ${social.title} page`}
          rel="noopener noreferrer"
        >
          <Brand
            brand={social.title}
            className="h-32 w-auto"
            aria-label={`${social.title} logo`}
          />
        </Link>
      </div>

      <Link
        href={social.website}
        className="font-bold text-foreground"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2>{social.title}</h2>
      </Link>
    </div>
  );
}
