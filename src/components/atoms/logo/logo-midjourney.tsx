import { LogoProps } from '@/components/atoms/logo/types';
import { cn } from '@/lib/utils';
import { defaultLogoSquareSize } from '@/components/atoms/logo/config';

export function LogoMidjourney({ id, className }: LogoProps) {
  return (
    <svg
      viewBox="0 0 132 128"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      id={id}
      className={cn(defaultLogoSquareSize, className)}
    >
      <path
        d="M1.69409 117.559C5.4588 117.559 11.1059 109.653 17.6941 108.523C21.4588 108.523 24.2823 116.429 33.6941 117.559C40.2823 117.559 43.1059 109.653 49.6941 109.653C56.2823 109.653 59.1059 117.559 65.6941 117.559C72.2823 117.559 75.1059 109.653 81.6941 109.653C88.2823 109.653 91.1059 117.559 97.6941 117.559C104.282 117.559 107.106 109.653 113.694 109.653C120.282 109.653 123.106 117.559 129.694 117.559"
        stroke="none"
        className="stroke-black dark:stroke-white"
        strokeWidth="3.38824"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.5694 109.69L10.2588 101.446L121.318 94.2927C112.583 102.236 101.365 108.674 90.0141 113.944"
        stroke="none"
        className="stroke-black dark:stroke-white"
        strokeWidth="3.38824"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M54.4753 24.6458C73.3742 30.4246 99.8024 58.3399 108.8 88.3446C103.868 86.4058 100.179 84.4293 93.2518 86.1987C86.5506 61.8222 74.56 38.5375 54.4753 24.6458Z"
        stroke="none"
        className="stroke-black dark:stroke-white"
        strokeWidth="3.38824"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.3317 11.2998C43.5387 21.6527 76.7434 50.4716 82.8422 88.8527C54.9269 77.5963 33.6752 83.601 18.8799 92.7304C41.4493 64.0433 31.3222 31.4222 19.3317 11.2998Z"
        stroke="none"
        className="stroke-black dark:stroke-white"
        strokeWidth="3.38824"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
