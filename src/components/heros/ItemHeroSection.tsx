import { Technology, Tool } from '@/lib/interfaces';
import Image from 'next/image';

export default function ItemHeroSection({ item }: { item: Tool | Technology }) {
  return (
    <section className="realtive flex h-[calc(100dvh-5rem)] items-center justify-center">
      <div className="grid max-w-max gap-4">
        <Image
          src={item.logo}
          alt={item.title}
          className="mx-auto max-h-32 max-w-32 shrink-0 object-contain"
          width="128"
          height="128"
          draggable={false}
          aria-label={`${item.title} logo`}
        />
        <div className="grid gap-4">
          <h1 className="text-center text-8xl font-bold text-theme-contrary">
            {item.title}
          </h1>
          <p className="mx-auto text-center">
            &ldquo;{item.description}&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}
