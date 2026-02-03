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
import { cn } from '@/lib/utils';

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

        <div className="relative w-full justify-between">
          <div>
            <div className="flex items-center gap-1.5">
              <h3
                className={cn(
                  'mb-0 text-base font-bold text-foreground',
                  item.isCurrent && 'pt-8 md:pt-0'
                )}
              >
                {item.title}
              </h3>

              {item.isCurrent && (
                <Badge size="sm" className="hidden self-center md:block">
                  Current Course
                </Badge>
              )}
            </div>

            <span className="block text-muted-foreground">
              <i>by {item.author}</i>
            </span>
          </div>

          {item.isCurrent && (
            <Badge size="sm" className="absolute top-0 left-0 md:hidden">
              Current Course
            </Badge>
          )}
        </div>
      </div>

      <ArrowUpRightIcon className="mr-4 size-5 text-current" />
    </Link>
  );
}
