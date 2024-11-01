import { ArrowDownTrayIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import Button from '@/components/atoms/button';

export default function ContactRow() {
  return (
    <div className="mx-auto mt-4 flex w-full max-w-screen-sm items-center justify-center gap-4 py-4 text-center md:mt-8 md:py-8">
      <Button
        variant="primary"
        asLink
        href="mailto:dominik.rubroeder@icloud.com?subject=I want to write you about..."
      >
        <EnvelopeIcon className="size-5 shrink-0" /> Contact
      </Button>

      <Button variant="secondary">
        <ArrowDownTrayIcon className="z-10 size-5 shrink-0" />
        <span className="z-10">CV</span>
      </Button>
    </div>
  );
}
