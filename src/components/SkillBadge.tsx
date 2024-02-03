import {useRef, useState} from 'react';
import {XMarkIcon} from '@heroicons/react/24/outline';

/** Property `position` should be a CSS class */
export default function SkillBadge({
  label,
  position,
  designMode,
  devMode
}: {
  label: string;
  position: string;
  designMode?: boolean;
  devMode?: boolean;
  animate?: boolean;
}) {
  const [isVisible, setIsVisible] = useState(true);
  const ref = useRef<HTMLDivElement | null>(null);

  if (!isVisible) return null;

  return (
    <div
      ref={ref}
      className={`group absolute animate-scale cursor-pointer ${
        position ? position : 'left-4 top-12'
      }`}
    >
      <div
        className={`relative flex w-max items-center gap-2 rounded-full border bg-gray-5 px-4 py-3 pl-5 ${
          designMode || devMode
            ? 'border-violet-400 hover:border-violet-600'
            : 'border-transparent'
        }`}
      >
        {devMode && (
          <div className="invisible absolute -left-12 top-1/2 -translate-y-1/2 select-none group-hover:visible">
            {ref.current?.clientHeight}px
          </div>
        )}

        {devMode && (
          <div className="invisible absolute -top-8 left-1/2 -translate-x-1/2 select-none rounded group-hover:visible">
            {ref.current?.clientWidth}px
          </div>
        )}

        <span>{label}</span>
        <button
          aria-label={`Close this ${label} skill badge`}
          className="group rounded-full bg-gray-4 p-2"
          onClick={() => setIsVisible(false)}
        >
          <XMarkIcon className="h-4 w-4 group-hover:text-theme-contrary" />
        </button>

        {devMode && (
          <div className="invisible absolute -right-12 top-1/2 -translate-y-1/2 select-none group-hover:visible">
            {ref.current?.clientHeight}px
          </div>
        )}

        {devMode && (
          <span className="peer absolute -bottom-10 left-1/2 -translate-x-1/2 select-none rounded bg-gray-5 p-1 px-1.5 text-xs">
            Badge.tsx
          </span>
        )}
      </div>
    </div>
  );
}
