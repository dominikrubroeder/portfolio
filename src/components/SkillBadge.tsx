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
  const [showProps, setShowProps] = useState(false);
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
          <div className="invisible absolute -left-12 top-1/2 -translate-y-1/2 group-hover:visible">
            {ref.current?.clientHeight}px
          </div>
        )}

        {devMode && (
          <div className="invisible absolute -top-8 left-1/2 -translate-x-1/2 rounded group-hover:visible">
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
          <div className="invisible absolute -right-12 top-1/2 -translate-y-1/2 group-hover:visible">
            {ref.current?.clientHeight}px
          </div>
        )}

        {devMode && (
          <>
            <span
              className="peer absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs"
              onClick={() => setShowProps((prevState) => !prevState)}
            >
              <span>Badge.tsx</span>
            </span>

            {showProps && (
              <span className="absolute -bottom-28 left-1/2 grid max-h-16 w-full max-w-96 -translate-x-1/2 gap-2 text-xs">
                <code className="rounded bg-gray-5 p-2">
                  <ul className="leading-6">
                    <li className="mb-2">Props</li>
                    <li className="w-max">label: {label}</li>
                    <li className="w-max">position: {position}</li>
                    <li className="w-max">
                      designMode:
                      {designMode ? ' true' : ' false'}
                    </li>
                    <li className="w-max">
                      devMode:
                      {devMode ? ' true' : ' false'}
                    </li>
                  </ul>
                </code>
              </span>
            )}
          </>
        )}
      </div>
    </div>
  );
}
