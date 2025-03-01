import { Social as SocialInterface } from '@/interfaces';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import Brand from '@/components/atoms/brand';

export default function Social({
  social,
  className
}: {
  social: SocialInterface;
  className?: string;
}) {
  return (
    <div className={cn('group w-80 space-y-6 whitespace-normal', className)}>
      <div className="relative mx-auto size-80 interactive rounded-xl border transition group-hover:bg-muted">
        <Link
          href={social.website}
          className="absolute inset-0 flex size-full cursor-pointer items-center justify-center"
          target="_blank"
          title={`Go to ${social.title} page`}
          aria-label={`Go to ${social.title} page`}
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
        className="group mx-auto flex items-center gap-2 font-bold text-foreground"
        target="_blank"
      >
        <h2>{social.title}</h2>
      </Link>
    </div>
  );
}
