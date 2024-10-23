import { defaultIconSize } from '@/components/ui/svg/config';

export default function HTML({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 128 128"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className ? className : defaultIconSize}
    >
      <g clipPath="url(#clip0_748_1013)">
        <path
          d="M27.1 0H32.85V5.7H38.15V0H43.9V17.25H38.15V11.5H32.9V17.25H27.1M51.5 5.75H46.425V0H62.35V5.75H57.25V17.25H51.5M64.875 0H70.9L74.6 6.075L78.3 0H84.325V17.25H78.575V8.7L74.55 14.9L70.525 8.7V17.25H64.875M87.175 0H92.925V11.55H101.075V17.25H87.175"
          fill="none"
          className="fill-theme-contrary"
        />
        <path
          d="M26.9 117.75L18.65 25.15H109.35L101.1 117.7L63.925 128"
          fill="#E44D26"
        />
        <path d="M64 120.125V32.75H101.075L94 111.75" fill="#F16529" />
        <path
          d="M35.5 44.075H64V55.4249H47.95L49 67.05H64V78.375H38.6M39.1 84.0749H50.5L51.3 93.15L64 96.55V108.4L40.7 101.9"
          fill="#EBEBEB"
        />
        <path
          d="M92.4 44.075H63.95V55.4249H91.3499M90.3249 67.05H63.95V78.4H77.9499L76.625 93.15L63.95 96.55V108.35L87.1999 101.9"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_748_1013">
          <rect width="128" height="128" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
