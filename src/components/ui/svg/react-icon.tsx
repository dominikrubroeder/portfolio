import { defaultIconSize } from '@/components/ui/svg/config';
import { cn } from '@/lib/utils';

export default function ReactIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 128 128"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(defaultIconSize, className)}
    >
      <path
        d="M64.5525 75.2842C70.7849 75.2842 75.8372 70.2319 75.8372 63.9995C75.8372 57.7671 70.7849 52.7147 64.5525 52.7147C58.3201 52.7147 53.2677 57.7671 53.2677 63.9995C53.2677 70.2319 58.3201 75.2842 64.5525 75.2842Z"
        fill="#61DAFB"
      />
      <path
        d="M64.5524 87.12C97.9945 87.12 125.105 76.7688 125.105 64C125.105 51.2312 97.9945 40.88 64.5524 40.88C31.1102 40.88 4 51.2312 4 64C4 76.7688 31.1102 87.12 64.5524 87.12Z"
        stroke="#61DAFB"
        strokeWidth="6.26087"
      />
      <path
        d="M44.53 75.5601C61.2511 104.522 83.7706 122.824 94.8287 116.44C105.887 110.056 101.296 81.4019 84.575 52.4401C67.8539 23.4784 45.3344 5.17583 34.2763 11.5602C23.2182 17.9447 27.8089 46.5984 44.53 75.5601Z"
        stroke="#61DAFB"
        strokeWidth="6.26087"
      />
      <path
        d="M44.53 52.4399C27.8089 81.4016 23.2182 110.055 34.2763 116.44C45.3344 122.824 67.8539 104.522 84.575 75.5599C101.296 46.5981 105.887 17.9444 94.8287 11.56C83.7706 5.17559 61.2511 23.4781 44.53 52.4399Z"
        stroke="#61DAFB"
        strokeWidth="6.26087"
      />
    </svg>
  );
}
