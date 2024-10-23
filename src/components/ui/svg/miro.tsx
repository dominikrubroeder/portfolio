import { defaultIconSize } from '@/components/ui/svg/config';

export default function Miro({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 128 128"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className ? className : defaultIconSize}
    >
      <path
        d="M27.7333 0H100.267C115.467 0 128 12.5333 128 27.7333V100.267C128 115.467 115.467 128 100.267 128H27.7333C12.5333 128 0 115.467 0 100.267V27.7333C0 12.5333 12.5333 0 27.7333 0Z"
        fill="#FFD02F"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M88.8 16H74.6666L86.4 36.5333L60.8 16H46.6666L59.4666 41.0667L32.8 16H18.6666L32.8 48L18.6666 112H32.8L59.7333 43.4667L46.6666 112H60.8L86.6666 38.9333L74.9333 112H89.0666L114.667 32L88.8 16Z"
        fill="#050038"
      />
      <defs>
        <clipPath id="clip0_748_1013">
          <rect width="128" height="128" fill="white" />
        </clipPath>
        <clipPath id="clip1_748_1013">
          <rect width="128" height="128" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
