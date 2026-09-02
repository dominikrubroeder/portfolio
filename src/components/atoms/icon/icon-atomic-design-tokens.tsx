import { cn } from '@/lib/utils';
import { LogoProps } from '@/components/atoms/logo';

export function IconAtomicDesignTokens({ id, className }: LogoProps) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className)}
      id={id}
    >
      <g clipPath={`url(#${id}-clip0_1554_150)`}>
        <g clipPath={`url(#${id}-clip1_1554_150)`}>
          <path
            d="M9.53629 15.0372C9.53629 17.6708 7.4124 19.7947 4.77877 19.7947C2.14514 19.7947 0.0212402 17.6708 0.0212402 15.0372C0.0212402 12.4036 2.14514 10.2797 4.77877 10.2797C7.39116 10.2797 9.53629 12.4036 9.53629 15.0372Z"
            fill="#BE6700"
          />
          <path
            d="M18.8814 4.84248C18.8814 7.47611 16.7575 9.60001 14.1239 9.60001C11.4902 9.60001 9.36633 7.47611 9.36633 4.84248C9.36633 2.20886 11.4902 0.0849609 14.1239 0.0849609C16.7362 0.0849609 18.8814 2.20886 18.8814 4.84248Z"
            fill="none"
            className="fill-black dark:fill-[#efeed5]"
          />
          <path
            d="M23.1292 19.0726C23.1292 21.7062 21.0053 23.8301 18.3717 23.8301C15.738 23.8301 13.6141 21.7062 13.6141 19.0726C13.6141 16.439 15.738 14.3151 18.3717 14.3151C20.984 14.3151 23.1292 16.439 23.1292 19.0726Z"
            fill="#A29E5E"
          />
        </g>
      </g>
      <defs>
        <clipPath id={`${id}-clip0_1554_150`}>
          <rect width="24" height="24" fill="white" />
        </clipPath>
        <clipPath id={`${id}-clip1_1554_150`}>
          <rect width="23.1504" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
