import { defaultSize } from '@/components/svg/config';

export default function NextJs({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 128 128"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className ? className : defaultSize}
    >
      <defs>
        <linearGradient
          id="gradient0"
          x1="77.5111"
          y1="82.8443"
          x2="102.756"
          y2="114.133"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="gradient1"
          x1="86.0445"
          y1="38.3999"
          x2="85.9016"
          y2="75.9999"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <clipPath id="clip0">
          <rect width="128" height="128" rx="196" ry="196" fill="white" />
        </clipPath>
      </defs>

      <rect
        width="128"
        height="128"
        rx="16"
        ry="16"
        fill="black"
        clipPath="url(#clip0)"
      />

      <path
        d="M106.317 112.014L49.1677 38.3999H38.4V89.5786H47.0141V49.3394L99.5549 117.223C101.926 115.637 104.184 113.895 106.317 112.014Z"
        fill="url(#gradient0)"
      />

      <path
        d="M90.3112 38.3999H81.7778V89.5999H90.3112V38.3999Z"
        fill="url(#gradient1)"
      />
    </svg>
  );
}
