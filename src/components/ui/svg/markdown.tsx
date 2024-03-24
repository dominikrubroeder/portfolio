export default function Markdown({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 208 128"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className ? className : 'h-8 w-auto'}
    >
      <path
        d="M193 5H15C9.47715 5 5 9.47715 5 15V113C5 118.523 9.47715 123 15 123H193C198.523 123 203 118.523 203 113V15C203 9.47715 198.523 5 193 5Z"
        stroke="none"
        strokeWidth="10"
        className="stroke-theme-contrary"
      />
      <path
        d="M30 98V30H50L70 55L90 30H110V98H90V59L70 84L50 59V98H30ZM155 98L125 65H145V30H165V65H185L155 98Z"
        fill="none"
        className="fill-theme-contrary"
      />
      <defs>
        <clipPath id="clip0_748_1013">
          <rect
            width="208"
            height="128"
            fill="none"
            className="fill-theme-contrary"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
