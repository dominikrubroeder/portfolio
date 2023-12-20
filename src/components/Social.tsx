import { Social } from '@/interfaces';
import Image from 'next/image';
import Link from 'next/link';

export default function Social({ social }: { social: Social }) {
  return (
    <Link
      href={social.website}
      target="_blank"
      title={`Go to ${social.title}`}
      aria-label={`Go to ${social.title} landingpage`}
    >
      <div className="grid gap-6 w-80 whitespace-normal">
        <div className="relative border rounded-xl h-80 w-80">
          <div className="absolute flex justify-center items-center inset-0 w-full h-full">
            <Image
              src={
                social.logo.length === 0
                  ? 'https://dominikrubroeder.vercel.app/figma.png'
                  : social.logo
              }
              alt={social.title}
              className="max-h-32 max-w-32 object-contain shrink-0"
              width="128"
              height="128"
              draggable={false}
            />
          </div>
        </div>
        <div className="rounded-3xl border w-max mx-auto px-3 py-2 font-bold text-theme-contrary">
          {social.badge}
        </div>

        <h2 className="text-theme-contrary font-bold mx-auto">
          {social.title}
        </h2>
      </div>
    </Link>
  );
}
