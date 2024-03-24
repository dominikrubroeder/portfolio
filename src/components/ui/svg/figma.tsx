import { defaultSize } from '@/components/ui/svg/config';

export default function Figma({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 128 128"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className ? className : defaultSize}
    >
      <g clipPath="url(#clip0_738_834)">
        <path
          d="M42.3333 128C54.1093 128 63.6667 118.443 63.6667 106.667V85.3333H42.3333C30.5573 85.3333 21 94.8906 21 106.667C21 118.443 30.5573 128 42.3333 128Z"
          fill="#0ACF83"
        />
        <path
          d="M21 64.0001C21 52.2241 30.5573 42.6667 42.3333 42.6667H63.6667V85.3334H42.3333C30.5573 85.3334 21 75.7761 21 64.0001Z"
          fill="#A259FF"
        />
        <path
          d="M21 21.3333C21 9.55733 30.5573 0 42.3333 0H63.6667V42.6667H42.3333C30.5573 42.6667 21 33.1093 21 21.3333Z"
          fill="#F24E1E"
        />
        <path
          d="M63.6667 0H85C96.776 0 106.333 9.55733 106.333 21.3333C106.333 33.1093 96.776 42.6667 85 42.6667H63.6667V0Z"
          fill="#FF7262"
        />
        <path
          d="M106.333 64.0001C106.333 75.7761 96.776 85.3334 85 85.3334C73.224 85.3334 63.6667 75.7761 63.6667 64.0001C63.6667 52.2241 73.224 42.6667 85 42.6667C96.776 42.6667 106.333 52.2241 106.333 64.0001Z"
          fill="#1ABCFE"
        />
      </g>
      <defs>
        <clipPath id="clip0_738_834">
          <rect
            width="86"
            height="128"
            fill="white"
            transform="translate(21)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
