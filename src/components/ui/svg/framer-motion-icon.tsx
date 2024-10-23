import { defaultIconSize } from '@/components/ui/svg/config';
import { cn } from '@/lib/utils';

export default function FramerMotionIcon({
  className
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 128 128"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(defaultIconSize, className)}
    >
      <path
        id="Vector"
        d="M105.669 -0.219727V42.4469H63.3343L21 -0.219727H105.669ZM21 42.4469H63.3343L105.669 85.1136H63.3343V127.78L21 85.1136V42.4469Z"
        fill="none"
        className="fill-theme-contrary"
      />
      <defs>
        <clipPath id="clip0_748_1013">
          <rect width="128" height="128" fill="white" />
        </clipPath>
        <clipPath id="clip1_748_1013">
          <rect
            width="85.33"
            height="128"
            fill="white"
            transform="translate(21 -0.219727)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
