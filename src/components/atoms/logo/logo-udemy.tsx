import { LogoProps } from '@/components/atoms/logo/types';
import { cn } from '@/lib/utils';

export function LogoUdemy({ id, className }: LogoProps) {
  return (
    <svg
      width="128"
      height="128"
      viewBox="0 0 128 128"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className)}
      id={id}
    >
      <g clipPath={`url(#${id}-clip0_1556_7446)`}>
        <g clipPath={`url(#${id}-clip1_1556_7446)`}>
          <path
            d="M30.9866 53.7324V97.1671C30.9866 107.034 34.128 114.463 40.272 119.748C46.416 125.034 54.2773 127.61 63.856 127.61C73.4346 127.61 81.2907 125.039 87.5787 119.748C93.8667 114.463 97.008 106.74 97.008 96.7404V53.7324H79.7173V95.5991C79.7173 106.458 71.6693 111.892 63.9946 111.892C56.3786 111.892 48.2773 106.607 48.2773 95.7484V53.7324H30.9866Z"
            fill="none"
            className="fill-black dark:fill-white"
          />
          <path
            d="M30.9866 18.6634L64 -0.392578L97.0133 18.6634V37.7248L63.9946 18.6634L30.9866 37.7248V18.6634Z"
            fill="#A435F0"
          />
        </g>
      </g>
      <defs>
        <clipPath id={`${id}-clip0_1556_7446`}>
          <rect width="128" height="128" rx="12" fill="white" />
        </clipPath>
        <clipPath id={`${id}-clip1_1556_7446`}>
          <rect
            width="128"
            height="128"
            fill="white"
            transform="translate(0 -0.392578)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
