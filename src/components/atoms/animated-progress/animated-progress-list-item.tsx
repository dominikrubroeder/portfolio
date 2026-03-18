import {
  NewspaperIcon,
  UserIcon,
  VideoCameraIcon
} from '@heroicons/react/24/outline';

import { AnimatedProgress } from '@/components/atoms/animated-progress';
import { Badge } from '@/components/atoms/badge';
import type { LearningResource } from '@/components/organisms/training';
import { ArrowUpRightIcon } from '@heroicons/react/20/solid';
import { Button } from '@/components/atoms/button';

export function AnimatedProgressListItem({ item }: { item: LearningResource }) {
  return (
    <Button
      variant="ghost-foreground"
      href={item.href}
      title={`View ${item.title} on external website`}
      className="group -mx-2 flex items-center gap-3 p-2 sm:items-center"
    >
      <div className="flex flex-1 items-center gap-3">
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
            <h3 className="mb-0 text-base font-bold text-balance text-foreground">
              {item.title}
              {item.isCurrent && (
                <Badge size="sm" className="ml-1 font-normal">
                  Current {item.type}
                </Badge>
              )}
            </h3>

            <span className="block text-muted-foreground">
              <i>by {item.author}</i>
            </span>
          </div>
        </div>
      </div>

      <ArrowUpRightIcon className="mr-4 size-5 text-current" />
    </Button>
  );
}
