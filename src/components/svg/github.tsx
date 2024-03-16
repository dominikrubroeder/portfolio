import { defaultSize } from '@/components/svg/config';
import { clsx } from 'clsx';

export default function GitHub({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 128 128"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx(
        'text-theme-contrary',
        className ? className : defaultSize
      )}
    >
      <path
        d="M64.053 0C28.6333 0 0 28.8444 0 64.5289C0 93.0534 18.3464 117.199 43.7976 125.745C46.9797 126.387 48.1453 124.356 48.1453 122.648C48.1453 121.152 48.0404 116.024 48.0404 110.681C30.2224 114.528 26.512 102.989 26.512 102.989C23.6485 95.5104 19.4057 93.5883 19.4057 93.5883C13.5739 89.6353 19.8305 89.6353 19.8305 89.6353C26.2996 90.0627 29.694 96.259 29.694 96.259C35.4196 106.087 44.6459 103.31 48.3577 101.601C48.8873 97.4338 50.5852 94.5494 52.388 92.9472C38.1769 91.4512 23.225 85.896 23.225 61.1095C23.225 54.0584 25.7686 48.2895 29.7989 43.8029C29.163 42.2007 26.9354 35.5756 30.4361 26.7086C30.4361 26.7086 35.8444 24.9989 48.0391 33.3323C53.26 31.9198 58.6443 31.2013 64.053 31.1952C69.4613 31.1952 74.9745 31.9439 80.0655 33.3323C92.2615 24.9989 97.6698 26.7086 97.6698 26.7086C101.17 35.5756 98.9416 42.2007 98.3057 43.8029C102.442 48.2895 104.881 54.0584 104.881 61.1095C104.881 85.896 89.929 91.3437 75.6117 92.9472C77.9455 94.9768 79.9593 98.8223 79.9593 104.912C79.9593 113.566 79.8545 120.511 79.8545 122.646C79.8545 124.356 81.0213 126.387 84.2021 125.746C109.653 117.197 128 93.0534 128 64.5289C128.105 28.8444 99.3664 0 64.053 0Z"
        fill="none"
        className="fill-current"
      />
    </svg>
  );
}
