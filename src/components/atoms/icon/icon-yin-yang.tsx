import { LogoProps } from '@/components/atoms/logo';
import { cn } from '@/lib/utils';

export function IconYinYang({ id, className }: LogoProps) {
  return (
    <svg
      width="44"
      height="44"
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className)}
      id={id}
    >
      <g clipPath="url(#clip0_1560_7801)">
        <g clipPath="url(#clip1_1560_7801)">
          <path
            d="M22 44C34.1503 44 44 34.1503 44 22C44 9.84974 34.1503 0 22 0C9.84974 0 0 9.84974 0 22C0 34.1503 9.84974 44 22 44Z"
            fill="black"
          />
          <path
            d="M22 0C27.8348 0 33.4306 2.31785 37.5564 6.44365C41.6822 10.5695 44 16.1652 44 22C44 27.8348 41.6822 33.4306 37.5564 37.5564C33.4306 41.6822 27.8348 44 22 44C24.9174 44 27.7153 42.8411 29.7782 40.7782C31.8411 38.7153 33 35.9174 33 33C33 30.0826 31.8411 27.2847 29.7782 25.2218C27.7153 23.1589 24.9174 22 22 22C19.0826 22 16.2847 20.8411 14.2218 18.7782C12.1589 16.7153 11 13.9174 11 11C11 8.08262 12.1589 5.28473 14.2218 3.22183C16.2847 1.15893 19.0826 0 22 0Z"
            fill="white"
          />
          <path
            d="M22 16.5C25.0376 16.5 27.5 14.0376 27.5 11C27.5 7.96243 25.0376 5.5 22 5.5C18.9624 5.5 16.5 7.96243 16.5 11C16.5 14.0376 18.9624 16.5 22 16.5Z"
            fill="black"
          />
          <path
            d="M22 38.5C25.0376 38.5 27.5 36.0376 27.5 33C27.5 29.9624 25.0376 27.5 22 27.5C18.9624 27.5 16.5 29.9624 16.5 33C16.5 36.0376 18.9624 38.5 22 38.5Z"
            fill="white"
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_1560_7801">
          <rect width="44" height="44" fill="white" />
        </clipPath>
        <clipPath id="clip1_1560_7801">
          <rect width="44" height="44" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
