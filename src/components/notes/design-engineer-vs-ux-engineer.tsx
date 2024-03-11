import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

export default function DesignEngineerVsUxEngineer() {
  return (
    <Link
      href="https://chat.openai.com/share/e54e4594-ea73-4d2f-93c8-31b89b6b2232"
      className="mx-auto flex cursor-pointer select-none items-center justify-between gap-4 rounded-2xl bg-gray-5 px-4 py-3 text-violet-400 transition hover:bg-gray-4"
      target="_blank"
      title="View 'Design Engineer vs UX Engineer' on ChatGPT"
      aria-label="View 'Design Engineer vs UX Engineer' on ChatGPT"
    >
      <h2 className="font-bold">Design Engineer vs UX Engineer</h2>
      <ArrowTopRightOnSquareIcon className="h-4 w-4 text-gray-2" />
    </Link>
  );
}
