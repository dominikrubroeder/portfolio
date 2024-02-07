import { defaultSize } from '@/components/svg/config';

export default function JavaScript({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 128 128"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className ? className : defaultSize}
      style={{ borderRadius: '.75rem' }}
    >
      <g id="Brand Logo">
        <g clipPath="url(#clip0_748_1013)">
          <g id="JavaScript" clipPath="url(#clip1_748_1013)">
            <path id="Vector" d="M128 0H0V128H128V0Z" fill="#F7DF1E" />
            <path
              id="Vector_2"
              d="M85.9835 100C88.5618 104.21 91.9162 107.305 97.8489 107.305C102.833 107.305 106.017 104.814 106.017 101.372C106.017 97.2475 102.745 95.7867 97.2597 93.3872L94.2527 92.097C85.5731 88.3992 79.807 83.7668 79.807 73.9738C79.807 64.9529 86.6804 58.0856 97.4223 58.0856C105.07 58.0856 110.568 60.7472 114.53 67.716L105.163 73.73C103.101 70.0322 100.876 68.5755 97.4223 68.5755C93.8992 68.5755 91.6663 70.8104 91.6663 73.73C91.6663 77.3384 93.9012 78.7992 99.0619 81.0341L102.069 82.3223C112.289 86.7047 118.059 91.1726 118.059 101.218C118.059 112.047 109.552 117.979 98.1273 117.979C86.9567 117.979 79.74 112.656 76.2088 105.679L85.9835 100ZM43.4936 101.043C45.3831 104.395 47.102 107.229 51.2346 107.229C55.1863 107.229 57.6793 105.683 57.6793 99.6713V58.7723H69.7072V99.8339C69.7072 112.288 62.4051 117.957 51.7466 117.957C42.1161 117.957 36.539 112.973 33.7026 106.97L43.4936 101.043Z"
              fill="black"
            />
          </g>
        </g>
      </g>
      <defs>
        <clipPath id="clip0_748_1013">
          <rect width="128" height="128" rx="12" fill="white" />
        </clipPath>
        <clipPath id="clip1_748_1013">
          <rect width="128" height="128" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}