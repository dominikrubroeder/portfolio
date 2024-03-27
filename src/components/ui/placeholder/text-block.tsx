import { clsx } from 'clsx';

export default function TextBlockPlaceholder({
  animated
}: {
  animated?: boolean;
}) {
  return (
    <div className={clsx('grid gap-4', animated && 'animate-pulse')}>
      <div className="h-8 w-full max-w-screen-sm rounded-full bg-gray-5"></div>
      <div className="h-8 w-full max-w-xs rounded-full bg-gray-5"></div>

      <div className="h-32 w-full rounded-3xl bg-gray-5"></div>
    </div>
  );
}
