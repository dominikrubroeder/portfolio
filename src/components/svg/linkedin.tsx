import { defaultSize } from '@/components/svg/config';

export default function LinkedIn({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 128 128"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className ? className : defaultSize}
    >
      <g clipPath="url(#clip0_752_1287)">
        <g clipPath="url(#clip1_752_1287)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.2222 127.78H113.778C121.632 127.78 128 121.413 128 113.558V14.0025C128 6.14778 121.632 -0.219727 113.778 -0.219727H14.2222C6.36751 -0.219727 0 6.14778 0 14.0025V113.558C0 121.413 6.36751 127.78 14.2222 127.78Z"
            fill="#007EBB"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M110.222 110.003H91.2278V77.6508C91.2278 68.7808 87.8575 63.8239 80.8369 63.8239C73.1994 63.8239 69.2091 68.9823 69.2091 77.6508V110.003H50.9038V48.3729H69.2091V56.6744C69.2091 56.6744 74.713 46.49 87.7913 46.49C100.863 46.49 110.222 54.4727 110.222 70.9825V110.003ZM29.0656 40.303C22.8304 40.303 17.7778 35.2108 17.7778 28.9306C17.7778 22.6503 22.8304 17.5581 29.0656 17.5581C35.3007 17.5581 40.3503 22.6503 40.3503 28.9306C40.3503 35.2108 35.3007 40.303 29.0656 40.303ZM19.6135 110.003H38.7012V48.3729H19.6135V110.003Z"
            fill="white"
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_752_1287">
          <rect width="128" height="128" fill="white" />
        </clipPath>
        <clipPath id="clip1_752_1287">
          <rect
            width="128"
            height="128"
            fill="white"
            transform="translate(0 -0.219727)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
