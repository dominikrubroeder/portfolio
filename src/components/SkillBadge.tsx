import {useState} from 'react';
import {XMarkIcon} from '@heroicons/react/24/outline';

/** Property `position` should be a CSS class */
export default function SkillBadge({
  text,
  position
}: {
  text: string;
  position: string;
}) {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div
      className={`absolute ${
        position ? position : 'left-4 top-12'
      } flex w-max animate-scale items-center gap-2 rounded-full bg-gray-5 px-4 py-3 pl-5`}
    >
      {text}
      <button
        aria-label={`Close this ${text} skill badge`}
        className="group rounded-full bg-gray-4 p-2"
        onClick={() => setIsVisible(false)}
      >
        <XMarkIcon className="h-4 w-4 group-hover:text-theme-contrary" />
      </button>
    </div>
  );
}
