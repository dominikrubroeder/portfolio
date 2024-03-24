import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

export default function DesignEngineerVsUxEngineer() {
  return (
    <Link
      href="https://chat.openai.com/share/e54e4594-ea73-4d2f-93c8-31b89b6b2232"
      className="mx-auto flex cursor-pointer select-none items-center gap-2 rounded-2xl bg-gray-5 px-4 py-3 text-violet-400 transition hover:bg-gray-4"
      target="_blank"
      title="View 'Design Engineer vs UX Engineer' on ChatGPT"
      aria-label="View 'Design Engineer vs UX Engineer' on ChatGPT"
    >
      <ArrowTopRightOnSquareIcon className="h-4 w-4 text-gray-2" />
      <h2 className="font-bold">
        Design Engineer <span className="font-normal text-gray-2">vs</span> UX
        Engineer
      </h2>
    </Link>
  );
}
