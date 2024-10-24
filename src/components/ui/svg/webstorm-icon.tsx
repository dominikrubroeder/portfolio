import { cn } from '@/lib/utils';
import { defaultIconSize } from '@/components/ui/svg/config';

export default function WebstormIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 128 128"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(defaultIconSize, className)}
    >
      <g clipPath="url(#clip0_651_91)">
        <g clipPath="url(#clip1_651_91)">
          <path
            d="M17.1886 115.749L0 13.3486L32 0.182861L52.2971 12.2514L70.9486 2.19429L109.897 17.1886L87.9543 128L17.1886 115.749Z"
            fill="url(#paint0_linear_651_91)"
          />
          <path
            d="M128 43.3371L111.543 2.56L81.5544 0L35.2915 44.4343L47.7258 101.669L70.9486 118.126L128 84.1143L113.92 57.9657L128 43.3371Z"
            fill="url(#paint1_linear_651_91)"
          />
          <path
            d="M102.4 37.3028L113.92 57.9656L128 43.3371L117.76 17.9199L102.4 37.3028Z"
            fill="url(#paint2_linear_651_91)"
          />
          <path
            d="M103.497 24.5029H24.5029V103.497H103.497V24.5029Z"
            fill="black"
          />
          <path d="M61.6229 88.6858H32V93.6229H61.6229V88.6858Z" fill="white" />
          <path
            d="M70.7656 62.72L74.9713 57.6C77.8971 59.9772 81.0056 61.6229 84.6628 61.6229C87.5885 61.6229 89.2342 60.5258 89.2342 58.5143V58.3315C89.2342 56.5029 88.1371 55.5886 82.6513 54.1258C76.0685 52.48 72.0456 50.6515 72.0456 44.0686V43.8858C72.0456 37.8515 76.7999 34.0115 83.3828 34.0115C88.137 34.0115 92.1599 35.4743 95.4513 38.2172L91.7942 43.7029C88.8685 41.6915 86.1256 40.4115 83.3828 40.4115C80.6399 40.4115 79.1771 41.6915 79.1771 43.3372V43.52C79.1771 45.7143 80.6399 46.4458 86.1256 47.9086C92.7085 49.7372 96.3656 52.1143 96.3656 57.7829V57.9658C96.3656 64.5486 91.4285 68.2058 84.4799 68.2058C79.5428 68.0229 74.6056 66.1943 70.7656 62.72Z"
            fill="white"
          />
          <path
            d="M64.3657 34.7429L59.4285 53.7601L53.9428 34.7429H48.4571L42.7885 53.7601L37.8514 34.7429H30.3542L39.68 67.4743H45.7142L51.2 48.4572L56.5028 67.4743H62.72L72.0457 34.7429H64.3657Z"
            fill="white"
          />
        </g>
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_651_91"
          x1="45.8386"
          y1="2.66954"
          x2="78.9632"
          y2="121.92"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.2849" stopColor="#00CDD7" />
          <stop offset="0.9409" stopColor="#2086D7" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_651_91"
          x1="56.1738"
          y1="17.7999"
          x2="112.21"
          y2="99.9698"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.1398" stopColor="#FFF045" />
          <stop offset="0.3656" stopColor="#00CDD7" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_651_91"
          x1="111.693"
          y1="27.9588"
          x2="119.051"
          y2="54.0232"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.2849" stopColor="#00CDD7" />
          <stop offset="0.9409" stopColor="#2086D7" />
        </linearGradient>
        <clipPath id="clip0_651_91">
          <rect width="128" height="128" fill="white" />
        </clipPath>
        <clipPath id="clip1_651_91">
          <rect width="128" height="128" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
