import {useRef, useState} from 'react';
import {XMarkIcon} from '@heroicons/react/24/outline';

/** Property `position` should be a CSS class */
export default function SkillBadge({
  label,
  designMode,
  devMode
}: {
  label: string;
  designMode?: boolean;
  devMode?: boolean;
  animate?: boolean;
}) {
  const [isVisible, setIsVisible] = useState(true);
  const ref = useRef<HTMLButtonElement | null>(null);

  if (!isVisible) return null;

  return (
    <button
      ref={ref}
      className="group animate-scale cursor-pointer"
      title={`Frontend skill: ${label}`}
      aria-label={`Frontend skill: ${label}`}
    >
      <div
        className={`relative flex w-max items-center gap-2 rounded-full border bg-muted px-4 py-3 pl-5 ${
          designMode || devMode
            ? 'border-accent hover:border-violet-600'
            : 'border-transparent'
        }`}
      >
        {designMode && (
          <div className="invisible absolute -left-12 top-1/2 -translate-y-1/2 select-none group-active:visible md:group-hover:visible">
            {ref.current?.clientHeight}px
          </div>
        )}

        {designMode && (
          <div className="invisible absolute -top-8 left-1/2 -translate-x-1/2 select-none rounded group-active:visible md:group-hover:visible">
            {ref.current?.clientWidth}px
          </div>
        )}

        <span>{label}</span>
        <div
          aria-label={`Close this ${label} skill badge`}
          className="group rounded-full bg-gray-4 p-2"
          onClick={() => setIsVisible(false)}
        >
          <XMarkIcon className="size-4 group-hover:text-foreground" />
        </div>

        {designMode && (
          <div className="invisible absolute -right-12 top-1/2 -translate-y-1/2 select-none group-active:visible md:group-hover:visible">
            {ref.current?.clientHeight}px
          </div>
        )}

        {designMode && !devMode && (
          <span className="invisible absolute -bottom-8 left-1/2 -translate-x-1/2 select-none group-active:visible md:group-hover:visible">
            {ref.current?.clientWidth}px
          </span>
        )}

        {devMode && (
          <span className="group-hover: group-active: invisible absolute -bottom-10 left-1/2 -translate-x-1/2 select-none rounded border border-transparent bg-muted p-1 px-1.5 text-xs group-active:visible md:group-hover:visible">
            Badge.tsx
          </span>
        )}
      </div>
    </button>
  );
}
