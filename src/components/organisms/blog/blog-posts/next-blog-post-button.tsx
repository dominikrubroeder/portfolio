import { Button } from '@/components/atoms/button';
import type { BlogPost } from '@/components/organisms/blog';
import { ArrowRightIcon } from '@heroicons/react/16/solid';

export function NextBlogPostButton({
  title,
  href
}: Pick<BlogPost, 'title' | 'href'>) {
  return (
    <Button
      href={href}
      title={`Go to the next blog post: ${href}`}
      aria-label={`Go to the next blog post: ${href}`}
    >
      <span className="sr-only">Go to the next blog post: {href}</span>
      Next: {title}
      <ArrowRightIcon />
    </Button>
  );
}
