import {
  NewspaperIcon,
  UserIcon,
  VideoCameraIcon
} from '@heroicons/react/24/outline';

import { AnimatedProgress } from '@/components/atoms/animated-progress';
import { Badge } from '@/components/atoms/badge';
import type { LearningResource } from '@/components/organisms/training';
import { ArrowUpRightIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';

export function AnimatedProgressListItem({ item }: { item: LearningResource }) {
  return (
    <Link
      href={item.href}
      title={`View ${item.title} on external website`}
      target="_blank"
      rel="nofollow"
      className="group -mx-2 flex items-center gap-3 rounded bg-background p-2 transition-all hover:bg-muted sm:items-center"
    >
      <div className="flex flex-1 gap-3">
        {Number.isInteger(item.progress) ? (
          <AnimatedProgress
            size={32}
            strokeWidth={5}
            progress={item.progress}
          />
        ) : item.type === 'blog' ? (
          <div className="size-8">
            <NewspaperIcon className="size-6 text-primary" />
          </div>
        ) : item.type === 'video' ? (
          <div className="size-8">
            <VideoCameraIcon className="size-6 text-primary" />
          </div>
        ) : item.type === 'people' ? (
          <div className="size-8">
            <UserIcon className="size-6 text-primary" />
          </div>
        ) : (
          <div className="size-8">
            <NewspaperIcon className="size-6 text-primary" />
          </div>
        )}

        <div className="w-full justify-between">
          <h3 className="mb-0.5 flex-1 space-x-1.5 text-base font-normal md:mb-1">
            <b className="text-foreground">{item.title}</b>
            {item.isCurrent && <Badge size="sm">Currently</Badge>}
            <span className="relative block text-muted-foreground">
              <i>by {item.author}</i>
            </span>
          </h3>
        </div>
      </div>

      <ArrowUpRightIcon className="mr-4 size-5 text-current" />
    </Link>
  );
}
