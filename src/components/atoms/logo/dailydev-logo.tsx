import { cn } from '@/lib/utils';

import { defaultIconSize } from '@/components/atoms/logo';

export function DailyDevLogo({ className }: { className?: string }) {
  return (
    <svg
      width="128"
      height="128"
      viewBox="0 0 128 128"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(defaultIconSize, className)}
    >
      <g clipPath="url(#clip0_978_2566)">
        <g opacity="0.56">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M109.916 63.5547L95.7865 49.4248L102.848 35.2998L125.806 58.2581C128.731 61.1833 128.731 65.926 125.806 68.8512L97.5487 97.1085C94.6235 100.034 89.8808 100.034 86.9556 97.1085C84.0304 94.1833 84.0304 89.4406 86.9556 86.5154L109.916 63.5547Z"
            className="fill-foreground"
          />
        </g>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M86.9609 29.9736C89.8861 27.0484 94.6301 27.0496 97.5553 29.9748L102.853 35.2726L41.0443 97.0813C38.1191 100.007 33.3752 100.005 30.45 97.0801L25.1522 91.7823L86.9609 29.9736ZM60.4708 49.4L49.8752 59.9956L35.7453 45.8657L18.0836 63.5274L32.2135 77.6573L25.1522 91.7823L2.19391 68.824C-0.731302 65.8988 -0.731302 61.1561 2.19391 58.2309L30.45 29.9748C33.3752 27.0496 38.1191 27.0484 41.0443 29.9736L60.4708 49.4Z"
          className="fill-foreground"
        />
      </g>
      <defs>
        <clipPath id="clip0_978_2566">
          <rect
            width="128"
            height="71.5222"
            transform="translate(0 27.7803)"
            className="fill-background"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
