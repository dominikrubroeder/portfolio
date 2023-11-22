import GitHub from '@/components/GitHub';
import { Suspense } from 'react';

export default async function HomePage() {
  return (
    <div className="flex h-full items-center justify-center">
      <h1 className="text-gradient bg-gradient-to-t from-apple-purple to-apple-pink text-3xl font-bold">
        Hello, world
      </h1>

      <Suspense>
        <GitHub />
      </Suspense>
    </div>
  );
}
