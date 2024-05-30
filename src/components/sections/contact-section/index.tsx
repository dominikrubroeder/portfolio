import { ArrowDownIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

export default function ContactSection() {
  return (
    <section className="mx-auto my-8 flex w-full max-w-screen-sm items-center justify-center gap-4 border-t border-gray-5 py-16 text-center">
      <a href="mailto:dominik.rubroeder@icloud.com?subject=I want to write you about...">
        <button className="flex items-center gap-2 rounded-2xl bg-accent px-4 py-3 text-white hover:bg-violet-500">
          <EnvelopeIcon className="size-4 shrink-0" /> Contact
        </button>
      </a>

      <button className="flex items-center gap-2 rounded-2xl px-4 py-3">
        Go further <ArrowDownIcon className="size-4 shrink-0" />
      </button>
    </section>
  );
}
