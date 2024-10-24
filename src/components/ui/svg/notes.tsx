import { defaultIconSize } from '@/components/ui/svg/config';

export default function Notes({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="120"
      height="120"
      viewBox="0 0 120 120"
      className={className ? className : defaultIconSize}
    >
      <defs>
        <linearGradient id="e" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#F4D87E"></stop>
          <stop offset="100%" stopColor="#F5C52C"></stop>
        </linearGradient>
        <filter
          id="c"
          width="110.2%"
          height="146.7%"
          x="-5.1%"
          y="-16.7%"
          filterUnits="objectBoundingBox"
        >
          <feOffset
            dy="2"
            in="SourceAlpha"
            result="shadowOffsetOuter1"
          ></feOffset>
          <feGaussianBlur
            in="shadowOffsetOuter1"
            result="shadowBlurOuter1"
            stdDeviation="2"
          ></feGaussianBlur>
          <feColorMatrix
            in="shadowBlurOuter1"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
          ></feColorMatrix>
        </filter>
        <rect id="a" width="120" height="120" x="0" y="0" rx="28"></rect>
        <path id="d" d="M-9 0h137v30H-9z"></path>
      </defs>
      <g fill="none" fillRule="evenodd">
        <mask id="b" fill="#fff">
          <use xlinkHref="#a"></use>
        </mask>
        <use fill="#FFF" xlinkHref="#a"></use>
        <g mask="url(#b)">
          <use fill="#000" filter="url(#c)" xlinkHref="#d"></use>
          <use fill="url(#e)" xlinkHref="#d"></use>
        </g>
        <path
          fill="#C7C5C9"
          d="M0 59h120v2H0zM0 89h120v2H0z"
          mask="url(#b)"
        ></path>
        <g fill="#C2C0C4" mask="url(#b)">
          <g transform="translate(0 35)">
            <circle cx="11.5" cy="1.5" r="1.5"></circle>
            <circle cx="16.5" cy="1.5" r="1.5"></circle>
            <circle cx="21.5" cy="1.5" r="1.5"></circle>
            <circle cx="26.5" cy="1.5" r="1.5"></circle>
            <circle cx="31.5" cy="1.5" r="1.5"></circle>
            <circle cx="36.5" cy="1.5" r="1.5"></circle>
            <circle cx="41.5" cy="1.5" r="1.5"></circle>
            <circle cx="46.5" cy="1.5" r="1.5"></circle>
            <circle cx="51.5" cy="1.5" r="1.5"></circle>
            <circle cx="56.5" cy="1.5" r="1.5"></circle>
            <circle cx="61.5" cy="1.5" r="1.5"></circle>
            <circle cx="66.5" cy="1.5" r="1.5"></circle>
            <circle cx="71.5" cy="1.5" r="1.5"></circle>
            <circle cx="76.5" cy="1.5" r="1.5"></circle>
            <circle cx="81.5" cy="1.5" r="1.5"></circle>
            <circle cx="86.5" cy="1.5" r="1.5"></circle>
            <circle cx="91.5" cy="1.5" r="1.5"></circle>
            <circle cx="96.5" cy="1.5" r="1.5"></circle>
            <circle cx="101.5" cy="1.5" r="1.5"></circle>
            <circle cx="106.5" cy="1.5" r="1.5"></circle>
            <circle cx="111.5" cy="1.5" r="1.5"></circle>
            <circle cx="116.5" cy="1.5" r="1.5"></circle>
            <circle cx="6.5" cy="1.5" r="1.5"></circle>
            <circle cx="1.5" cy="1.5" r="1.5"></circle>
          </g>
        </g>
      </g>
    </svg>
  );
}
